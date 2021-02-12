//Import constructor for new Project and new Class
import { Project } from '../common/constructor';
import { localSave } from '../common/data';
import reset from '../render/reset';


const addProject = (data) => {
    //Data selection from new Project Form
    var name = document.getElementById('newProjectForm').elements[0].value;
    //Push the data to a new Project class constructor if the value is not empty
    if (name != "") data.push(new Project(name));
    localSave(data);
    document.getElementById('newProjectModal').style.display = "none";
    reset();
}

export default addProject;