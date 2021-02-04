//Constructor for new project
export class Project {
    constructor(name) {
        this.projectName = name;
        this.tasks = [];
        console.log(this.projectName, this.tasks);
        this.projectInfo = () => {
            return (this.projectName, this.tasks);
        }
    }
}
//Constructor for new Task
export class Task {
    constructor(title, description, dueDate, priority) {
        this.taskTitle = title;
        this.taskDesc = description;
        this.taskDate = dueDate;
        this.taskPriority = priority;
        this.checked = false;
    }
}
