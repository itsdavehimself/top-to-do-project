const storageArr = localStorage.getItem('array') ?
JSON.parse(localStorage.getItem('array')) : [
  {name: 'My first project', taskArr: [{taskName: 'My first task', description: 'This is my first task!', dueDate: '2023-08-31', priority: 'low'}], id: 1},
  {name: 'Yardwork', taskArr: [{taskName: 'Mow the lawn', description: 'Charge batteries', dueDate: '2023-05-04', priority: 'high'}], id: 2},
  {name: 'Spring cleaning', taskArr: [{taskName: 'Clean out garage drawers', description: 'Just toss it!', dueDate: '2023-07-20', priority: 'medium'}], id: 3}
];

const projectArr = [];

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
    },
    deleteTask(id) {
      const taskID = this.taskArr.findIndex(object => object.id === id);
      this.taskArr.splice(taskID, 1);
    }
  }
  projectArr.push(project);
  localStorage.setItem('array', JSON.stringify(projectArr));
  return project
};

for (let i = 0; i < storageArr.length; i+=1) {
  Object.assign(createProject(), storageArr[i]);
  localStorage.setItem('array', JSON.stringify(projectArr))
}

export { createProject, projectArr };