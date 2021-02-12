const renderProjects = (allProjects) => {
    //Render Projects on list-tab
    console.log(allProjects);
    document.getElementById('list-tab').innerHTML = allProjects.map((project) => {
        //Get the length of each project
        const projectLength = Object.keys(project.tasks).length;
        //Returns the list group of each project
        return (
            `
            <a class="list-group-item list-group-item-action" id="list-${project.projectName.toLowerCase()}-list"
                data-bs-toggle="list" href="#list-${project.projectName.toLowerCase()}" role="tab"
                aria-controls="${project.projectName.toLowerCase()}"> 
                ${project.projectName} 
                <span class="badge rounded-pill bg-secondary">${projectLength}</span>
                <span class="visually-hidden">number of tasks in ${project.projectName}</span>
            </a>
        `
        );
    }).join('');
}

export default renderProjects;