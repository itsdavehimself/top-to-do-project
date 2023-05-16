const projectArr = localStorage.getItem('array') ?
JSON.parse(localStorage.getItem('array')) : [] ;

function createProject (name) {
  const project = {
    name,
    taskArr: [],
    id: Date.now(),
    createTask(taskName, description, dueDate, priority) {
      const task = {
        taskName,
        description,
        dueDate,
        priority,
        id: Date.now()
      }

      this.taskArr.push(task);
      console.log(this.taskArr);
    },
    deleteTask(id) {
      const taskID = this.taskArr.findIndex(object => object.id === id);
      this.taskArr.splice(taskID, 1);
    }
  }
  projectArr.push(project);
  console.log(projectArr);
  localStorage.setItem('array', JSON.stringify(projectArr));
  return project
};

const myFirstProject = createProject('My first project');
myFirstProject.createTask('My first task', 'This is my first task, ever!', '2023-08-31', 'low', '0');
myFirstProject.createTask('Overdue task', 'This task is way overdue.', '2023-01-05', 'medium', '1');
const secondProject = createProject('Yardwork');
secondProject.createTask('Mow lawn', 'Remember to charge batteries.', '2023-05-17', 'high', '2');
const thirdProject = createProject('Spring cleaning');
thirdProject.createTask('Clean out garage drawers', 'Just toss it!', '2023-05-28', 'low', '3');

export { createProject, projectArr };