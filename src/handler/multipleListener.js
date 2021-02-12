//import data handlers
import { data, removeLocal } from '../common/data';

import removeTask from './removeTask';
import editTask from './editTask';

//Query selector for remove button for each task.
const multipleListener = () => {
    //Multiple elements selector remove-task
    document.querySelectorAll('.remove-task').forEach(element => {
        element.addEventListener('click', e => {
            console.log("clicked remove");
            //get data project name  and task name
            var str = e.currentTarget.getAttribute('data-remove').split(',');
            var project = str[0];
            var task = str[1];
            removeTask(project, task, data);
        });
    });
    //Selector for edit task
    document.querySelectorAll('.edit-task').forEach(editBtn => {
        editBtn.addEventListener('click', e => {
            console.log(e);
            //get data project name  and task name
            var str = e.currentTarget.getAttribute('data-edit').split(',');
            var project = str[0];
            var task = str[1];
            editTask(project,task,data);
        });
    });

    //Selector for check boxes
    document.querySelectorAll("input[type=checkbox]").forEach(check => {
        console.log(check);
        check.addEventListener('change', e => {
            console.log(e);
            var id = e.target.id;
            var project = id.split("-")[1].trim();
            var task = id.split("-")[2].trim();
            for (var i = 0; i < data.length; i++) {
                //if true looks trough tasks to find the task
                if (data[i].projectName === project) {
                    for (var j = 0; j < data[i].tasks.length; j++) {
                        if (data[i].tasks[j].taskTitle === task) {
                            data[i].tasks[j].checked = !data[i].tasks[j].checked;
                        }
                    }
                }
                //We call local storage saver.
                removeLocal(data);
            }
        });
    });
}

export default multipleListener;