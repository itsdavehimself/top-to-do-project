import { createProject } from './task'
import renderProjectList from './render-project-list';

const projectCreateForm = document.createElement('form');
const projectNameLabel = document.createElement('label');
const projectNameInput = document.createElement('input');
const projectNameBtn = document.createElement('button');
projectCreateForm.classList.add('create-project')
projectNameLabel.textContent = "Name";
projectNameLabel.setAttribute('for', 'project-name');
projectNameInput.setAttribute('id', 'project-name');
projectNameInput.setAttribute('name', 'project-name');
projectNameInput.setAttribute('type', 'text');
projectNameBtn.textContent = "Add";
projectNameBtn.classList.add('add-project-btn-form');

function addProject(e) {
  const projectsDiv = document.querySelector('.projects');
  const projectName = document.getElementById('project-name').value;
  const newProject = createProject(projectName);
  console.log(newProject);
  document.getElementById('project-name').value = '';
  projectsDiv.removeChild(projectCreateForm);
  e.preventDefault();
}

projectNameBtn.addEventListener('click', addProject);
projectNameBtn.addEventListener('click', renderProjectList);

function projectForm() {
  const projectsDiv = document.querySelector('.projects');
  projectsDiv.appendChild(projectCreateForm);
  projectCreateForm.appendChild(projectNameLabel);
  projectCreateForm.appendChild(projectNameInput);
  projectCreateForm.appendChild(projectNameBtn);
};

export default projectForm;