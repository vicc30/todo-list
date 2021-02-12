//Import constructor for new Project and new Class
import { Project, Task } from './constructor';
//Set all projects to null at the beggining
export let data = [];

//Local storage save
//Map each project object local save as project name
export const localSave = (projects) => projects.map((project) => {
    localStorage.setItem(project.projectName, JSON.stringify(project));
});

export const removeLocal = (data) => {
    localStorage.clear();
    localSave(data);
}

export const getStorage = () => {
    var getProjects = [];
    //Maps each key value to push it to getProjects array.
    for (var i = 0; i < localStorage.length; i++) {
        getProjects
            .push(
                JSON.parse(
                    localStorage.getItem(
                        localStorage.key(i)
                    )
                )
            );
    }
    data = getProjects;
    return getProjects;
}

if (localStorage.length === 0) {
    let newProjects = [];
    //Creates some sample data if there is no local storage
    //Programming Project
    newProjects.push(new Project('Programming'));
    newProjects[0].tasks.push(new Task('To Do App', 'Make the application as TOP instructions', '2021/02/08', 'high'));
    newProjects[0].tasks.push(new Task('Library Project', 'Make the application as TOP instructions', '2021/02/01', 'high'));
    //Home Project
    newProjects.push(new Project('Home'));
    newProjects[1].tasks.push(new Task('Shop', 'Shop the meals', '2021/01/21', 'normal'));
    newProjects[1].tasks.push(new Task('Paint the house', 'Buy all needed', '2021/02/04', 'low'));
    newProjects[1].tasks.push(new Task('Buy some clothes', 'Buy clothes', '2021/02/21', 'low'));
    newProjects[1].tasks.push(new Task('Plant a tree', 'Buy a tree', '2021/02/20', 'low'));
    newProjects[1].tasks.push(new Task('Make something', 'Buy all ', '2021/02/01', 'low'));
    //Save new projects in local storage.
    localSave(newProjects);
    data = newProjects;
} else {
    //if there is local storage calls get function
    data = getStorage();
}

export default data;