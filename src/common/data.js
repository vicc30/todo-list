//Import constructor for new Project and new Class
import { Project, Task } from './constructor';
//Set all projects to null at the beggining
let allProjects = [];

//Creates some sample data
//Programming Project
allProjects.push(new Project('Programming'));
allProjects[0].tasks.push(new Task('To Do App', 'Make the application as TOP instructions', '2021/02/08', 'high'));
allProjects[0].tasks.push(new Task('Library Project', 'Make the application as TOP instructions', '2021/02/01', 'high'));
//Home Project
allProjects.push(new Project('Home'));
allProjects[1].tasks.push(new Task('Shop', 'Shop the meals', '2021/01/21', 'normal'));
allProjects[1].tasks.push(new Task('Paint the house', 'Buy all needed', '2021/02/04', 'low'));
allProjects[1].tasks.push(new Task('Buy some clothes', 'Buy clothes', '2021/02/21', 'low'));
allProjects[1].tasks.push(new Task('Plant a tree', 'Buy a tree', '2021/02/20', 'low'));
allProjects[1].tasks.push(new Task('Make something', 'Buy all ', '2021/02/01', 'low'));

export default allProjects;