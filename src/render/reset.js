import renderProjects from './renderProjects';
import renderTask from './renderTask';
import checkRender from '../handler/checkBox';
//Reset the screen and render data elements

const reset = (allProjects) => {
    document.getElementById('list-tab').innerHTML = "";
    document.getElementById('nav-tabContent').innerHTML = "";
    renderProjects(allProjects);
    renderTask(allProjects);
    checkRender(allProjects);
}

export default reset;