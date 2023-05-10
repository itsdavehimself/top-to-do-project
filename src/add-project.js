import { createProject, projectArr } from "./task";
import showProject from "./project-view";

function displayProject(name, id) {
  const projectsDiv = document.querySelector('.projects');
  const projectContainer = document.createElement('div');
  const projectCard = document.createElement('div');
  const projectDeleteBtn = document.createElement('button');

  projectContainer.classList.add('project-container');
  projectContainer.setAttribute('id', id);
  projectDeleteBtn.classList.add('project-delete-btn');
  projectDeleteBtn.textContent = 'Delete project';
  projectCard.classList.add('project-card');
  projectCard.setAttribute('id', id);
  projectCard.textContent = `${name}`;
  projectsDiv.appendChild(projectContainer);
  projectContainer.appendChild(projectCard);
  projectContainer.appendChild(projectDeleteBtn);

  projectsDiv.addEventListener('click', (e) => {
    if (e.target.className === 'project-card') {
      showProject(e.target.id);
    }
  }, {once : true});

  projectDeleteBtn.addEventListener('click', () => {
    projectsDiv.removeChild(projectContainer);
    const projectIndex = projectArr.findIndex(object => object.id === Number(id))
    projectArr.splice(projectIndex, 1);
  }); 
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