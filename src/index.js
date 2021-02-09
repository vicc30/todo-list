'use strict';
//Import styles
import './styles/style.css';
//import data handlers
import { data, removeLocal } from './common/data';
//Import reset module
import reset from './render/reset';
//Import onclick handlers
import addProject from './handler/addProject';
import removeProject from './handler/removeProject';
import addTask from './handler/addTask';
import removeTask from './handler/removeTask';
import { projectModal, taskModal } from './handler/modal';

//Initialize render projects then tasks.
reset(data);

//Initialize handler events
//Add Project
document.getElementById('new-project').onclick = () => {
    addProject(data);
    //Re render items
    reset(data);
    multipleListener();
}
document.getElementById('remove-project').onclick = () => {
    removeProject(data);
    reset(data);
    removeLocal(data);
    multipleListener();
}
document.getElementById('new-task').onclick = () => {
    addTask(data);
    reset(data);
    multipleListener();
}

//Query selector for remove button for each task.
const multipleListener = () => {
    //Multiple elements selector remove-task
    document.querySelectorAll('.remove-task').forEach(element => {
        element.addEventListener('click', e => {
            console.log("clicked");
            //get data project name  and task name
            var str = e.currentTarget.getAttribute('data-remove').split(',');
            var project = str[0];
            var task = str[1];
            removeTask(project, task, data);
        });
    });
}

multipleListener();
projectModal();
taskModal();