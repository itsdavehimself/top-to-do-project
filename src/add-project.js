import {createProject} from "./task";
import showProject from "./project-view";

function displayProject(name, id) {
  const projectsDiv = document.querySelector('.projects');
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  projectCard.setAttribute('id', id);
  projectCard.textContent = `${name}`;
  projectsDiv.appendChild(projectCard);
  projectsDiv.addEventListener('click', (e) => {
    if (e.target.className === 'project-card') {
      showProject(e.target.textContent, e.target.id);
    }
  })
}

function addProject(e) {
  const projectName = document.getElementById('project-name').value;
  const project = createProject(projectName);
  const addProjectForm = document.querySelector('.create-project');
  const contentDiv = document.querySelector('.content');
  displayProject(projectName, project.id);
  console.log(project);
  console.log(project.id);
  document.getElementById('project-name').value = '';
  contentDiv.removeChild(addProjectForm);
  e.preventDefault();
}

export default addProject;