import reset from '../render/reset';
const removeTask = (project, task, allProjects) => {

    console.log("clicked remove task to remove " + project + " project, and " + task + " task");

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
    reset(allProjects);
    //After rendering again it adds event listener for each button.
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
}

export default removeTask;