import { projectForm, projectNameBtn } from './form-create-project'
import addProject from './add-project';

const contentDiv = document.querySelector('.content');
const projectsDiv = document.createElement('div');
const addProjectBtn = document.createElement('button');

addProjectBtn.classList.add('add-project-btn');
addProjectBtn.textContent = '+ Add Project'
projectsDiv.classList.add('projects')
addProjectBtn.addEventListener('click', projectForm)
projectNameBtn.addEventListener('click', addProject);

function projectsPage() {
  contentDiv.appendChild(projectsDiv);
  projectsDiv.appendChild(addProjectBtn);
}

export default projectsPage;

