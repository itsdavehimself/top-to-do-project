import { createProject } from './task'
import renderProjectList from './render-project-list';
import { populateStorage } from './local-storage';

const coveringPanel = document.createElement('div');
const projectCreateFormDiv = document.createElement('div');
const createFormTitle = document.createElement('p');
const projectCreateForm = document.createElement('form');
const projectNameDiv = document.createElement('div');
const projectNameLabel = document.createElement('label');
const projectNameInput = document.createElement('input');
const projectCreateBtnDiv = document.createElement('div');
const projectNameBtn = document.createElement('button');
const cancelProjectBtn = document.createElement('button');
coveringPanel.classList.add('covering-panel');
projectCreateFormDiv.classList.add('create-project-div');
createFormTitle.classList.add('create-form-title');
projectCreateForm.classList.add('create-project');
projectCreateBtnDiv.classList.add('project-form-btn-div');
createFormTitle.textContent = 'Add project';
projectNameDiv.classList.add('project-form-name-div');
projectNameLabel.textContent = 'Name';
projectNameLabel.setAttribute('for', 'project-name');
projectNameInput.setAttribute('id', 'project-name');
projectNameInput.setAttribute('name', 'project-name');
projectNameInput.setAttribute('type', 'text');
projectNameInput.setAttribute('autocomplete', 'off');
projectNameBtn.textContent = 'Add';
projectNameBtn.classList.add('add-project-btn-form');
cancelProjectBtn.classList.add('cancel-project-btn-form');
cancelProjectBtn.textContent = 'Cancel';
cancelProjectBtn.setAttribute('type', 'button');

function addProject(e) {
  const mainDiv = document.querySelector('.main');
  const projectName = document.getElementById('project-name').value;
  const newProject = createProject(projectName);
  console.log(newProject);
  document.getElementById('project-name').value = '';
  mainDiv.removeChild(coveringPanel);
  populateStorage();
  e.stopPropagation();
  e.preventDefault();
}

function cancelProjectAdd(e) {
  const mainDiv = document.querySelector('.main');
  document.getElementById('project-name').value = '';
  mainDiv.removeChild(coveringPanel);
  e.preventDefault();
}

projectNameBtn.addEventListener('click', addProject);
projectNameBtn.addEventListener('click', renderProjectList);
cancelProjectBtn.addEventListener('click', cancelProjectAdd);
projectCreateFormDiv.addEventListener('click', (e) => e.stopPropagation());
coveringPanel.addEventListener('click', cancelProjectAdd);

function projectForm() {
  const mainDiv = document.querySelector('.main');
  mainDiv.appendChild(coveringPanel);
  coveringPanel.appendChild(projectCreateFormDiv);
  projectCreateFormDiv.appendChild(createFormTitle);
  projectCreateFormDiv.appendChild(projectCreateForm);
  projectCreateForm.appendChild(projectNameDiv);
  projectNameDiv.appendChild(projectNameLabel);
  projectNameDiv.appendChild(projectNameInput);
  projectCreateForm.appendChild(projectCreateBtnDiv);
  projectCreateBtnDiv.appendChild(cancelProjectBtn);
  projectCreateBtnDiv.appendChild(projectNameBtn);
  projectNameInput.focus();
};

export default projectForm;