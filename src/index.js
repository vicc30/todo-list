'use strict';
//Import styles
import './styles/style.css';
//import data constructor for demo
import allProjects from './common/data';
//Import reset module
import reset from './render/reset';
//Import onclick handlers
import addProject from './handler/addProject';
import removeProject from './handler/removeProject';
import addTask from './handler/addTask';
import removeTask from './handler/removeTask';

//Initialize render projects then tasks.
reset(allProjects);

//Initialize handler events
//Add Project
document.getElementById('new-project').onclick = () => {
    addProject();
    //Re render items
    reset(allProjects);
}
document.getElementById('remove-project').onclick = () => {
    removeProject(allProjects);
    reset(allProjects);
}
document.getElementById('new-task').onclick = () => {
    addTask(allProjects);
    reset(allProjects);
}

//Multiple elements selector remove-task
document.querySelectorAll('.remove-task').forEach(element => {
    element.addEventListener('click', e => {
        console.log("clicked");
        //get data project name  and task name
        var str = e.currentTarget.getAttribute('data-remove').split(',');
        var project = str[0];
        var task = str[1];
        removeTask(project, task, allProjects);
    });
});

