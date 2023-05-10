import { projectArr } from "./task";
import { addTaskForm, addTaskBtn, cancelTaskBtn } from "./form-add-task";
import addTask from "./add-task";
import cancelAddTask from "./cancel-add-task";

const contentDiv = document.querySelector('.content');

function showProject(id) {
  const projectDetailsDiv = document.createElement('div');
  const projectTitle = document.createElement('p');
  const projectIndex = projectArr.findIndex(object => object.id === Number(id))
  const tasksDiv = document.createElement('div');
  const newTask = document.createElement('div');
  const addTaskToProject = document.createElement('p');

  contentDiv.removeChild(contentDiv.lastChild);
  projectDetailsDiv.classList.add('project-details')
  projectDetailsDiv.setAttribute('id', id);
  projectTitle.classList.add('project-title');
  projectTitle.textContent = `${projectArr[projectIndex].name}`;
  tasksDiv.classList.add('tasks');
  newTask.classList.add('new-task');
  addTaskToProject.textContent = 'Add task';
  contentDiv.appendChild(projectDetailsDiv);
  projectDetailsDiv.appendChild(projectTitle);
  projectDetailsDiv.appendChild(tasksDiv);
  tasksDiv.appendChild(newTask);
  newTask.appendChild(addTaskToProject);
  addTaskToProject.addEventListener('click', addTaskForm);
  addTaskBtn.addEventListener('click', addTask(projectIndex));
  cancelTaskBtn.addEventListener('click', cancelAddTask);
}

export default showProject;