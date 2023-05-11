import projectsPage from "./projects-page";

const contentDiv = document.querySelector('.content');
const homeDiv = document.createElement('div');
const sideBarDiv = document.querySelector('.sidebar');
const projectsPageBtn = document.createElement('button');

homeDiv.classList.add('home-div');
projectsPageBtn.textContent = 'Projects';
projectsPageBtn.addEventListener('click', projectsPage)

function homePage() {
  contentDiv.appendChild(homeDiv);
  sideBarDiv.appendChild(projectsPageBtn)
}

export default homePage;