import projectForm from "./add-project-form";
import renderProjectList from "./render-project-list";

const contentDiv = document.querySelector('.content');
const projectsPageDiv = document.createElement('div');
const projectsPageTitle = document.createElement('p');
const projectsPageHeader = document.createElement('div');
const addProjectBtn = document.createElement('button');
const currentProjectsDiv = document.createElement('div');
currentProjectsDiv.classList.add('current-projects');

projectsPageDiv.classList.add('projects');
projectsPageHeader.classList.add('projects-header');
addProjectBtn.classList.add('add-project-btn');
addProjectBtn.textContent = '+ Add Project';
addProjectBtn.addEventListener('click', projectForm);
projectsPageTitle.textContent = 'Projects';

function projectsPage() {
  contentDiv.appendChild(projectsPageDiv);
  projectsPageDiv.appendChild(projectsPageHeader);
  projectsPageHeader.appendChild(projectsPageTitle);
  projectsPageHeader.appendChild(addProjectBtn);
  projectsPageDiv.appendChild(currentProjectsDiv);
  renderProjectList();
}

export default projectsPage;
