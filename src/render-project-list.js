import { projectArr } from "./task";
import showProject from "./show-project";

function renderProjectList() {
  const currentProjectsDiv = document.querySelector('.current-projects');
  currentProjectsDiv.replaceChildren();
  for (let i = 0; i < projectArr.length; i+=1){
    const projectContainer = document.createElement('div');
    const projectCard = document.createElement('div');
    const projectName = projectArr[i].name;
    const projectID = projectArr[i].id;
    const project = projectArr[i];
    const deleteProjectBtn = document.createElement('button');
    
    deleteProjectBtn.classList.add('delete-project-btn');
    deleteProjectBtn.textContent = 'Delete project';
    projectContainer.classList.add('project-container');
    projectCard.textContent = `${projectName}`;
    projectCard.classList.add('project-card');
    projectCard.setAttribute('id', projectID);
    currentProjectsDiv.appendChild(projectContainer);
    projectContainer.appendChild(projectCard)
    projectContainer.appendChild(deleteProjectBtn);
    projectCard.addEventListener('click', () => showProject(project), {once: true});
    deleteProjectBtn.addEventListener('click', () => {
      currentProjectsDiv.removeChild(projectCard);
      currentProjectsDiv.removeChild(deleteProjectBtn);
      projectArr.splice(i, 1);
      console.log(i);
    });
  }
}

export default renderProjectList;