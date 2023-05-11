import { projectForm, projectNameBtn } from './form-create-project'
import addProject from './add-project';
import renderProjectCard from './render-project-card';

function projectsPage() {
  const contentDiv = document.querySelector('.content');
  const projectsDiv = document.createElement('div');
  const addProjectBtn = document.createElement('button');

  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.textContent = '+ Add Project'
  projectsDiv.classList.add('projects')
  addProjectBtn.addEventListener('click', projectForm)
  projectNameBtn.addEventListener('click', addProject);
  projectNameBtn.addEventListener('click', renderProjectCard);
  contentDiv.removeChild(contentDiv.firstChild);
  contentDiv.appendChild(projectsDiv);
  projectsDiv.appendChild(addProjectBtn);
  renderProjectCard();
}

export default projectsPage;

