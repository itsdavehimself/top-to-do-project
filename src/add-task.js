import { projectArr } from "./task";

const addTask = projectIndex => e => {
  e.preventDefault();
  const tasksDiv = document.querySelector('.tasks');
  const taskName = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDueDate = document.getElementById('task-date').value;
  const taskPriority = document.getElementById('task-priority').value;
  const newTask = projectArr[projectIndex].createTask(taskName, taskDescription, taskDueDate, taskPriority)
  const addTaskForm = document.querySelector('.add-task-form');
  document.getElementById('task-name').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('task-date').value = '';
  document.getElementById('task-priority').value = '';
  tasksDiv.removeChild(addTaskForm);
}

export default addTask;