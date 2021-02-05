import renderProjects from './renderProjects';
import renderTask from './renderTask';
//Reset the screen and render data elements

const reset = (allProjects) => {
    document.getElementById('list-tab').innerHTML = "";
    document.getElementById('nav-tabContent').innerHTML = "";
    renderProjects(allProjects);
    renderTask(allProjects);
}

export default reset;