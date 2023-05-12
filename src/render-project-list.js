import { projectArr } from "./task";
import showProject from "./show-project";

function renderProjectList() {
  const currentProjectsDiv = document.querySelector('.current-projects');
  currentProjectsDiv.replaceChildren();
  for (let i = 0; i < projectArr.length; i+=1){
    const projectCard = document.createElement('div');
    const projectName = projectArr[i].name;
    const projectID = projectArr[i].id;
    const project = projectArr[i];
    projectCard.textContent = `${projectName}`;
    projectCard.classList.add('project-card');
    projectCard.setAttribute('id', projectID);
    currentProjectsDiv.appendChild(projectCard);
    projectCard.addEventListener('click', () => showProject(project), {once: true});
  }
}

export default renderProjectList;