import projectFactory from './task';

const contentDiv = document.querySelector('.content');
const projectDiv = document.createElement('div');
const projectHeader = document.createElement('p');
const createProjectBtn = document.createElement('button');
projectDiv.classList.add('projects');
projectHeader.classList.add('page-header')
projectHeader.textContent = 'Projects';
createProjectBtn.classList.add('create-project-btn');
createProjectBtn.textContent = 'Create Project';

function openProjects() {
  contentDiv.appendChild(projectDiv);
  projectDiv.appendChild(projectHeader);
  projectDiv.appendChild(createProjectBtn);
};

function createNewProject() {
  const newProject = projectFactory('new project');
  newProject.createTask('name','desc','due','priority');
  console.log(newProject.taskArr);
}

export { openProjects, createNewProject, createProjectBtn }