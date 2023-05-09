import { projectForm, projectNameBtn } from './form-create-project'
import addProject from './add-project';

const contentDiv = document.querySelector('.content');
const projectsDiv = document.createElement('div');

projectsDiv.classList.add('projects')

function projectsPage() {
  projectForm();
  projectNameBtn.addEventListener('click', addProject);
  contentDiv.appendChild(projectsDiv);
}

export default projectsPage;

