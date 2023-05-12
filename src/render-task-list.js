function renderTaskList(project) {
  const tasksDiv = document.querySelector('.tasks');
  const tasks = project.taskArr
  for (let i = 0; i < tasks.length; i+=1) {
    console.log(tasks[i].taskName);
  }
}

export default renderTaskList;