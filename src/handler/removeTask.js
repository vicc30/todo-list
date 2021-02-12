import reset from '../render/reset';
import { localSave } from '../common/data';

const removeTask = (project, task, allProjects) => {

    //Looks trough allProjects to find if the project name is equal to active name
    for (var i = 0; i < allProjects.length; i++) {
        //if true looks trough tasks to find the task
        if (allProjects[i].projectName === project) {
            for (var j = 0; j < allProjects[i].tasks.length; j++) {
                if (allProjects[i].tasks[j].taskTitle === task.trim()) {
                    allProjects[i].tasks.splice(j, 1);
                }
            }
        }
    }
    //Save data on local storage
    localSave(allProjects);
    reset();
}

export default removeTask;