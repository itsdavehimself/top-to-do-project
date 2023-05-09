const contentDiv = document.querySelector('.content');
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
projectNameBtn.classList.add('add-project-btn');

function projectForm() {
  contentDiv.appendChild(projectCreateForm);
  projectCreateForm.appendChild(projectNameLabel);
  projectCreateForm.appendChild(projectNameInput);
  projectCreateForm.appendChild(projectNameBtn);
};

export { projectForm, projectNameBtn};