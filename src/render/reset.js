import renderProjects from './renderProjects';
import renderTask from './renderTask';
import checkRender from '../handler/checkBox';

//Import onclick handlers
import addProject from '../handler/addProject';
import removeProject from '../handler/removeProject';
import addTask from '../handler/addTask';
import multipleListener from '../handler/multipleListener';
import tab from '../handler/tab';
import {projectModal, editModal, taskModal} from '../handler/modal';

//import data handlers
import { data } from '../common/data';

//Reset the screen and render data elements

const reset = () => {
    //Clean UI
    document.getElementById('list-tab').innerHTML = "";
    document.getElementById('nav-tabContent').innerHTML = "";
    //Render projects
    renderProjects(data);
    //Render task
    renderTask(data);
    //checkbox for each task
    checkRender(data);

    /**
     * Here adds event listener for each component
    **/

    //New project button modal
    document.getElementById('new-project').onclick = () => {
        addProject(data);
    }
    //Remove project
    document.getElementById('remove-project').onclick = () => {
        removeProject(data);   
    }
    // New task
    document.getElementById('new-task').onclick = () => {
        addTask(data);
    }

    //Tab listener for show each project
    tab();

    //Event listener for multiple elements all edit task and all remove buttons

    multipleListener();

    //Modal handlers
    projectModal();
    editModal();
    taskModal();

}

export default reset;