function cancelAddTask(e) {
  const tasksDiv = document.querySelector('.tasks');
  const addTaskForm = document.querySelector('.add-task-form');
  document.getElementById('task-name').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('task-date').value = '';
  document.getElementById('task-priority').value = '';
  tasksDiv.removeChild(addTaskForm);
  e.preventDefault();
};

export default cancelAddTask;