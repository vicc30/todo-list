import data from '../common/data';
//Import constructor for new Project and new Class
import { Project } from '../common/constructor';


const addProject = () => {
    
    //Data selection from new Project Form
    var name = document.getElementById('newProjectForm').elements[0].value;
    //Push the data to a new Project class constructor if the value is not empty
    if(name!="")data.push(new Project(name));
}

export default addProject;