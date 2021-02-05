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
document.getElementById('new-project').onclick = (e) => {
    addProject();
    //Re render items
    reset(allProjects);
}
document.getElementById('remove-project').onclick = (e) => {
    removeProject();
}
document.getElementById('new-task').onclick = (e) => {
    addTask();
}

//Multiple elements selector remove-task
var task = document.getElementsByClassName('remove-task');
for (var i = 0; i < task.length; i++) {
    task[i].addEventListener("click", (e) => {
        //get data project name and task name
        var str = e.currentTarget.getAttribute('data-remove').split(',');
        var project = str[0];
        var task = str[1];
        removeTask(project, task);
    });
}
