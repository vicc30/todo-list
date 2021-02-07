const removeProject = (allProjects) => {

    //Select active class project
    var project = document.querySelector('.list-group-item.active')
        .firstChild
        .textContent
        .trim();
    console.log(project);

    //Looks trough allProject to find if the project name is equal to active name
    for (var i = 0; i < allProjects.length; i++) {
        //if true delete Project from array
        if (allProjects[i].projectName === project.trim()) {
            allProjects.splice(i, 1);
        }
    }
}

export default removeProject;