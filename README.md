# Todo List Project

This project is part of [Odin Project](https://www.theodinproject.com/lessons/todo-list) JavaScript path assignment. This is how I solve this assignment.

## Tasks

- [x] Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
  - This was made by doing two classes one for Project and another for Task as shown here:
  ```javascript 
        class Project {
            constructor(name) {
            this.projectName = name;
            this.tasks = [];
        }
    ```
  ```javascript 
        class Task {
            constructor(title, description, dueDate, priority) {
                this.taskTitle = title;
                this.taskDesc = description;
                this.taskDate = dueDate;
                this.taskPriority = priority;
                this.checked = false;
            }
        }
    ```
- [x] Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
  - It was made by making the two classes and the object ends with this format to be handled by local storage:
  ```JSON
    [
        {
            Project Name: string,
            tasks: [
                {
                    Task Title: string,
                    Description: string,
                    Due Date: string,
                    checked: boolean
                }
            ]
        }
    ]
  ```
- [x] Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
  - The entry point for the code is `index.js` contained in the `src` folder.
  - The render of DOM objects are made on `index.html`
- [x] You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
  - The data and constructors are located in `/src/common/` under the name of `constructor.js` and `data.js`
  - The event handlers are inside of `/src/handler` includes onclick events of add/remove Project, add/remove task, show modal, show table tabs.
  - The interface and injection of DOM are handled by files inside `/src/render` with js files to render projects / tasks or reset UI.
- [ ] The look of the User Interface is up to you, but it should be able to do the following:
  1. View all projects
  2. View all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
  3. Expand a single todo to see/edit its details
  4. Delete a todo
- [x] Use localStorage to save user’s projects and todos between sessions.
  - localStorage is used in `/src/common/data.js` to save and retrieve all data needed.
- [x] Since you are probably already using webpack, adding external libraries from npm is a cinch!
  - Used [webpack](https://webpack.js.org/) with basic configuration.
  - Changed output path in order to deploy gh-pages easily. 
  ```JSON
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    }
  ```

## Usage

- Clone git repo
- On terminal Run `npm install`
- cd `todo-list/`
- `npm run build`
- Build ends on folder `/docs` in the html file `index.html`

### Technologies
- HTML
- CSS
- Vanilla JS
- Webpack
- FontAwesome

### Issues and bugs

- Please refer [here](https://github.com/vicc30/todo-list/issues)


## Live preview

- Check preview on github pages -> [Link](https://vicc30.github.io/todo-list/)

## Support
- If you liked this project please thumbs up in the [To Do List lesson of Odin Project](https://www.theodinproject.com/lessons/todo-list).
