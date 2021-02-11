const checkClick = (data) => {
    /**
     * Selects all checkbox (task done) and for each checkbox adds event listener
     * when clicked with id's help we get the project and task
     * Then we map data through project then task to toggle checkbox
     * on local storage.
     **/
    document.querySelectorAll("input[type=checkbox]").forEach(check => {
        check.addEventListener('change', e => {
            if (e.target.checked) {
                var allProjects = data;
                var check = e.target.checked;
                var id = e.target.id;
                var project = id.split("-")[1].trim();
                var task = id.split("-")[2].trim();
                console.log(project);
                console.log(task);
                for (var i = 0; i < allProjects.length; i++) {
                    //if true looks trough tasks to find the task
                    if (allProjects[i].projectName === project) {
                        for (var j = 0; j < allProjects[i].tasks.length; j++) {
                            if (allProjects[i].tasks[j].taskTitle === task) {
                                allProjects[i].tasks[j].checked = !allProjects[i].tasks[j].checked;
                            }
                        }
                    }
                    console.log(allProjects[i]);
                }
                //We call local storage saver.
                removeLocal(allProjects);
                reset(allProjects);
                tab();
                checkRender(allProjects);
            }
        });
    });
}

//Renders check box as saved
const checkRender = (data) => {
    data.forEach((project) => {
        var tasks = project.tasks;
        //Selects projectName
        var name = project.projectName;
        tasks.forEach((task) => {
            console.log(task.checked);
            document.getElementById(`check-${name}-${task.taskTitle}`).checked = task.checked;
        });
    });
}

export {checkClick, checkRender};