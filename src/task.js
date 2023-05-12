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
  return project
};

export { createProject, projectArr };