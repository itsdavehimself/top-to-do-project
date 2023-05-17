const storageArr = localStorage.getItem('array') ?
JSON.parse(localStorage.getItem('array')) : [];

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

for (let i = 0; i < storageArr.length; i+=1) {
  console.log(storageArr[i])
  const newObj = Object.assign(createProject(), storageArr[i]);
  console.log('new obj...');
  console.log(newObj)
  console.log('projectarr:');
  console.log(projectArr);
  localStorage.setItem('array', JSON.stringify(projectArr))
}

export { createProject, projectArr };