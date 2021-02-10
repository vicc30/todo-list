const renderTask = (allProjects) => {
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
                            <th scope="col"></th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody-${name.toLowerCase()}">             
                    </tbody>
                </table>
            </div>
        `;
        /**Maps task in each project and appends it */
        tasks.map((task) => {
            document.getElementById(`tbody-${name.toLowerCase()}`).innerHTML +=
                `
            <tr id="delete-${task.taskTitle}">
                <th scope="col">
                    <input class="form-check-input" type="checkbox" value=${task.checked}
                        aria-label="Checkbox for task">
                </th>
                <td>${task.taskTitle}</td>
                <td>${task.taskDesc}</td>
                <td>${task.taskDate}</td>
                <td>${task.taskPriority}</td>
                <td><a class="remove-task btn" data-remove='${name},${task.taskTitle}'><span class="badge rounded-pill bg-danger">Remove</span>
                    <span class="visually-hidden">Remove task ${task.taskTitle}</span></a>
                </td>
            </tr>
            `
        });
    });
}

export default renderTask;