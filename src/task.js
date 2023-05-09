const projectFactory = (projectName) => {
  const taskArr = [];
  let taskIDCount = 0;

  function taskFactory(taskName, description, dueDate, priority, id) {
    return { taskName, description, dueDate, priority, id};
  };
  
  function createTask(taskName, description, dueDate, priority) {
    const taskItem = taskFactory(taskName, description, dueDate, priority, taskIDCount);
    taskArr.push(taskItem);
    taskIDCount += 1;
  }
  
  function deleteTask(id) {
    const taskID = taskArr.findIndex(object => object.id === id);
    taskArr.splice(taskID, 1);
  }

  return { projectName, taskArr, taskIDCount, createTask, deleteTask };
}

export default projectFactory;