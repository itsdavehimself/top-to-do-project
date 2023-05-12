const sideBarDiv = document.querySelector('.sidebar');
const projectsPageBtn = document.createElement('button');
const homeBtn = document.createElement('button');

projectsPageBtn.classList.add('projects-page-btn');
projectsPageBtn.textContent = 'Projects';
homeBtn.classList.add('home-btn');
homeBtn.textContent = 'Home';

function sideBar() {
  sideBarDiv.appendChild(homeBtn);
  sideBarDiv.appendChild(projectsPageBtn);
}

export { sideBar, homeBtn, projectsPageBtn };