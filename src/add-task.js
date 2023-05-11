import { projectArr } from "./task";
import displayTask from "./display-task";

function addTask(projectIndex) {
  console.log(`from addtask${  projectIndex}`);
  const tasksDiv = document.querySelector('.tasks');
  const taskName = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDueDate = document.getElementById('task-date').value;
  const taskPriority = document.getElementById('task-priority').value;
  const addTaskForm = document.querySelector('.add-task-form');
  const projectTaskArr = projectArr[projectIndex].taskArr
  projectArr[projectIndex].createTask(taskName, taskDescription, taskDueDate, taskPriority)
  document.getElementById('task-name').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('task-date').value = '';
  document.getElementById('task-priority').value = '';
  tasksDiv.removeChild(addTaskForm);
  displayTask(projectTaskArr);
}

export default addTask;