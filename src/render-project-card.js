import { projectArr } from "./task";
import { projectForm, projectNameBtn } from './form-create-project'
import addProject from './add-project';
import showProject from "./show-project";


function renderProjectCard() {
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
  for (let i = 0; i < projectArr.length; i+=1) {
    const projectName = projectArr[i].name
    const projectID = projectArr[i].id
    const projectCard = document.createElement('div');
    const projectTitle = document.createElement('p');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('id', projectID);
    projectTitle.textContent = `${projectName}`
    projectsDiv.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.addEventListener('click', () => showProject(projectID));
  }
}

export default renderProjectCard;