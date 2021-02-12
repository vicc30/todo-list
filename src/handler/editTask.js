import { Task } from '../common/constructor';
import reset from '../render/reset';
import { localSave } from '../common/data';
import removeTask from './removeTask';

const editTask = (project, task, allProjects) => {

    //Selects id task modal where data is going to be injected
    var taskModal = document.getElementById("editTaskModal");
    //Shows modal after click
    taskModal.style.display = "block";

    // Creates form with values as saved on local storage
    // Selects form to append all attr
    var form = document.getElementById("editTaskForm");
    //Title edit
    var taskSelected = [];

    //find the specific task that we want to edit
    for (var i = 0; i < allProjects.length; i++) {
        //if true looks trough tasks to find the task
        if (allProjects[i].projectName === project) {
            for (var j = 0; j < allProjects[i].tasks.length; j++) {
                if (allProjects[i].tasks[j].taskTitle === task.trim()) {
                    taskSelected = allProjects[i].tasks[j];
                }
            }
        }
    }

    //Reset form after render.
    form.innerHTML = "";

    //Add the form into HTML
    form.innerHTML +=
        `
                    <div class="form-group">
                        <label for="taskTitle">Title of the Task</label>
                        <input type="text" class="form-control" id="taskTitle"
                            placeholder="Type the name of new task" required value="${taskSelected.taskTitle}">
                    </div>
                    <div class="form-group">
                        <label for="taskDescription">Description</label>
                        <input type="text" class="form-control" 
                            id="taskDescription" value="${taskSelected.taskDesc}"
                            placeholder="Type the description here..." required>
                    </div>
                    <div class="input-group mb-3 mt-3">
                        <label class="input-group-text" for="taskDate">Due Date</label>
                        <input type="date" class="form-control" value="${taskSelected.taskDate}"
                            id="taskDate" placeholder="DD/MM/AA" required>
                    </div>
                    <div class="input-group mb-3 mt-3">
                        <label class="input-group-text" for="taskPriority">Priority</label>
                        <select class="form-select" id="taskPriority">
                            <option value="low" class="low">Low</option>
                            <option value="medium" class="medium">Medium</option>
                            <option value="high" class="high">High</option>
                        </select>
                    </div>
                `
    //Creates an event listener if the save button is clicked
    // Get thesave button that wants to update the data inside the modal
    var save = document.getElementById("edit-task-save");

    save.onclick = () => {
        //Removes the selected task.
        removeTask(project, task, allProjects);

        //Looks trough allProject to find if the project name is equal to active name
        for (var i = 0; i < allProjects.length; i++) {
            //if true push new Task with the form entries
            if (allProjects[i].projectName === project.trim()) {
                //Selects data from editTaskForm
                var title = document.getElementById('editTaskForm').elements[0].value;
                var description = document.getElementById('editTaskForm').elements[1].value;
                var date = document.getElementById('editTaskForm').elements[2].value;
                var priority = document.getElementById('editTaskForm').elements[3].value;

                //If any value is empty it doesnt continue
                if (title != "" || description != "" || date != "") {
                    allProjects[i].tasks.push(new Task(title, description, date, priority));
                }
            }
        }
        console.log(allProjects);
        //Save new data on local storage
        localSave(allProjects);
        var modal = document.getElementById("editTaskModal");
        modal.style.display = "none";
        reset();
    }
}

export default editTask;