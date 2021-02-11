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
import tab from './handler/tab';
import checkRender from './handler/checkBox';

//Initialize render projects then tasks.
reset(data);

//Initialize handler events
//Add Project
document.getElementById('new-project').onclick = () => {
    addProject(data);
    //Re render items
    reset(data);
    tab();
    multipleListener();
}
document.getElementById('remove-project').onclick = () => {
    removeProject(data);
    reset(data);
    removeLocal(data);
    tab();
    multipleListener();
}
document.getElementById('new-task').onclick = () => {
    addTask(data);
    reset(data);
    tab();
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
    checkRender(data);
    checkClick(data);
}

const checkClick = (data) => {
    /**
     * Selects all checkbox (task done) and for each checkbox adds event listener
     * when clicked with id's help we get the project and task
     * Then we map data through project then task to toggle checkbox
     * on local storage.
     **/
    document.querySelectorAll("input[type=checkbox]").forEach(check => {
        check.addEventListener('change', e => {
            var allProjects = data;
            var id = e.target.id;
            var project = id.split("-")[1].trim();
            var task = id.split("-")[2].trim();
            for (var i = 0; i < allProjects.length; i++) {
                //if true looks trough tasks to find the task
                if (allProjects[i].projectName === project) {
                    for (var j = 0; j < allProjects[i].tasks.length; j++) {
                        if (allProjects[i].tasks[j].taskTitle === task) {
                            allProjects[i].tasks[j].checked = !allProjects[i].tasks[j].checked;
                        }
                    }
                }
                //We call local storage saver.
                removeLocal(allProjects);
                reset(allProjects);
                tab();
                multipleListener();
            }
        });
    });
}

projectModal();
taskModal();
tab();
multipleListener();