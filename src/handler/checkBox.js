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

export default checkRender;