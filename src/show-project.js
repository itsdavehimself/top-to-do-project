import { addTaskForm } from "./add-task-form";

const contentDiv = document.querySelector('.content');

function showProject(project) {
  contentDiv.replaceChildren();
  const projectViewDiv = document.createElement('div');
  const projectTitle = document.createElement('p');
  const taskDiv = document.createElement('div');
  const openTaskForm = document.createElement('div');
  taskDiv.classList.add('tasks');
  openTaskForm.classList.add('add-task');
  openTaskForm.textContent = 'Add task';
  openTaskForm.addEventListener('click', addTaskForm);
  projectTitle.textContent = `${project.name}`;
  projectViewDiv.classList.add('project-view');
  projectViewDiv.setAttribute('id', project.id)
  contentDiv.appendChild(projectViewDiv);
  projectViewDiv.appendChild(projectTitle);
  projectViewDiv.appendChild(taskDiv);
  projectViewDiv.appendChild(openTaskForm);
}

export default showProject;