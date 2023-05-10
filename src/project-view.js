import { projectArr } from "./task";

const contentDiv = document.querySelector('.content');

function showProject(name, id) {
  const projectDetailsDiv = document.createElement('div');
  const projectTitle = document.createElement('p');
  const projectIndex = projectArr.findIndex(object => object.id === Number(id))
  const tasksDiv = document.createElement('div');
  const newTask = document.createElement('div');
  const addTask = document.createElement('p');


  contentDiv.removeChild(contentDiv.lastChild);
  projectDetailsDiv.classList.add('project-details')
  projectDetailsDiv.setAttribute('id', id);
  projectTitle.classList.add('project-title');
  projectTitle.textContent = `${projectArr[projectIndex].name}`;
  tasksDiv.classList.add('tasks');
  newTask.classList.add('new-task');
  addTask.classList.add('add-task');
  addTask.textContent = 'Add task';
  contentDiv.appendChild(projectDetailsDiv);
  projectDetailsDiv.appendChild(projectTitle);
  projectDetailsDiv.appendChild(tasksDiv);
  tasksDiv.appendChild(newTask);
  newTask.appendChild(addTask);
}

export default showProject;