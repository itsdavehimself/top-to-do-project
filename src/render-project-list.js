import { projectArr } from "./task";
import showProject from "./show-project";
import trashIcon from './trash-can-outline.svg';

function renderProjectList() {
  const currentProjectsDiv = document.querySelector('.current-projects');
  currentProjectsDiv.replaceChildren();
  for (let i = 0; i < projectArr.length; i+=1){
    const projectContainer = document.createElement('div');
    const projectCard = document.createElement('div');
    const projectNameCard = document.createElement('p');
    const projectName = projectArr[i].name;
    const projectID = projectArr[i].id;
    const project = projectArr[i];
    const deleteProjectBtn = document.createElement('button');
    const trashCan = document.createElement('img');

    trashCan.src = trashIcon;
    trashCan.classList.add('trash-icon');
    deleteProjectBtn.classList.add('delete-project-btn');
    deleteProjectBtn.appendChild(trashCan);
    projectContainer.classList.add('project-container');
    projectCard.classList.add('project-card');
    projectCard.setAttribute('id', projectID);
    projectNameCard.classList.add('project-card-name');
    projectNameCard.textContent = `${projectName}`;
    currentProjectsDiv.appendChild(projectContainer);
    projectContainer.appendChild(projectCard);
    projectCard.appendChild(projectNameCard);
    projectContainer.appendChild(deleteProjectBtn);
    projectCard.addEventListener('click', () => showProject(project), {once: true});
    deleteProjectBtn.addEventListener('click', () => {
      currentProjectsDiv.removeChild(projectContainer);
      projectArr.splice(i, 1);
      console.log(i);
      renderProjectList();
    });
  }
}

export default renderProjectList;