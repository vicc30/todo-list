import { Task } from '../common/constructor';
import { localSave } from '../common/data';
import reset from '../render/reset';

const newTask = (allProjects) => {
    //Selects the project name with active class and get the text content of anchor tag
    var project = document.querySelector('.list-group-item.active')
        .firstChild
        .textContent;
    //Looks trough allProject to find if the project name is equal to active name
    for (var i = 0; i < allProjects.length; i++) {
        //if true push new Task with the form entries
        if (allProjects[i].projectName === project.trim()) {
            //Selects data from newTaskForm
            var title = document.getElementById('newTaskForm').elements[0].value;
            var description = document.getElementById('newTaskForm').elements[1].value;
            var date = document.getElementById('newTaskForm').elements[2].value;
            var priority = document.getElementById('newTaskForm').elements[3].value;

            //If any value is empty it doesnt continue
            if (title != "" || description != "" || date != "") {
                allProjects[i].tasks.push(new Task(title, description, date, priority));
            }
        }
    }
    //Save new data on local storage
    localSave(allProjects);
    document.getElementById('newTaskModal').style.display = "none";
    reset();
}

export default newTask;