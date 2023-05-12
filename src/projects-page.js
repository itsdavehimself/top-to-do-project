import projectForm from "./add-project-form";
import renderProjectList from "./render-project-list";

const contentDiv = document.querySelector('.content');
const projectsPageDiv = document.createElement('div');
const addProjectDiv = document.createElement('div');
const addProjectBtn = document.createElement('button');
const currentProjectsDiv = document.createElement('div');
currentProjectsDiv.classList.add('current-projects');

projectsPageDiv.classList.add('projects');
addProjectDiv.classList.add('add-project');
addProjectBtn.classList.add('add-project-btn');
addProjectBtn.textContent = '+ Add Project';
addProjectBtn.addEventListener('click', projectForm);

function projectsPage() {
  contentDiv.appendChild(projectsPageDiv);
  projectsPageDiv.appendChild(addProjectDiv);
  addProjectDiv.appendChild(addProjectBtn);
  projectsPageDiv.appendChild(currentProjectsDiv);
  renderProjectList();
}

export default projectsPage;
