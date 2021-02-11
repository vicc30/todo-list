const renderTask = (allProjects) => {
    console.log(allProjects);
    //Select all projects and for each calls renderItem
    allProjects.forEach((element) => {
        //Selects each task object
        var tasks = element.tasks;
        //Selects projectName
        var name = element.projectName;

        /**Select tabContent and add head for each project
         * Then map each task and render in tbody-projectName
         **/
        document.getElementById('nav-tabContent').innerHTML +=
            `<div class="tab-pane fade show" id="list-${name.toLowerCase()}"
                aria-labelledby="list-${name.toLowerCase()}-list">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"><i class="fas fa-tasks"></i></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody-${name.toLowerCase()}">             
                    </tbody>
                </table>
            </div>
        `;
        /**Maps task in each project and appends it as a table */
        tasks.map((task) => {
            document.getElementById(`tbody-${name.toLowerCase()}`).innerHTML +=
            `
                <tr id="delete-${task.taskTitle}">
                    <th scope="col">
                        <input class="form-check-input" type="checkbox" id="check-${name}-${task.taskTitle}">
                    </th>
                    <td>${task.taskTitle}</td>
                    <td>${task.taskDesc}</td>
                    <td>${task.taskDate}</td>
                    <td>${task.taskPriority}</td>
                    <td><a class="remove-task btn" data-remove='${name},${task.taskTitle}'>
                        <i class="far fa-trash-alt"></i>
                        <span class="visually-hidden">Remove task ${task.taskTitle}</span></a>
                    </td>
                    <td><a class="edit-task btn" data-edit='${name},${task.taskTitle}'>
                        <i class="fas fa-edit"></i>
                        <span class="visually-hidden">Edit task ${task.taskTitle}</span></a>
                    </td>
                </tr>
            `
        });
    });
}

export default renderTask;