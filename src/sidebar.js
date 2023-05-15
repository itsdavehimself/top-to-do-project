import homeIcon from './home-outline.svg';
import listIcon from './format-list-bulleted.svg';

const sideBarDiv = document.querySelector('.sidebar');
const sideBarBtnDiv = document.createElement('div');
const projectsBtnDiv = document.createElement('div');
const projectsPageBtn = document.createElement('div');
const homeBtnDiv = document.createElement('div');
const homeBtn = document.createElement('div');
const homeImg = document.createElement('img');
const listImg = document.createElement('img');

homeImg.src = homeIcon;
homeImg.classList.add('home-icon');
listImg.src = listIcon;
listImg.classList.add('list-icon');
sideBarBtnDiv.classList.add('sidebar-btn-div');
projectsBtnDiv.classList.add('projects-btn-div');
projectsPageBtn.classList.add('projects-page-btn');
projectsPageBtn.textContent = 'Projects';
homeBtnDiv.classList.add('home-btn-div');
homeBtn.classList.add('home-btn');
homeBtn.textContent = 'Home';

function sideBar() {
  sideBarDiv.appendChild(sideBarBtnDiv);
  sideBarBtnDiv.appendChild(homeBtnDiv);
  homeBtnDiv.appendChild(homeImg);
  homeBtnDiv.appendChild(homeBtn);
  sideBarBtnDiv.appendChild(projectsBtnDiv);
  projectsBtnDiv.appendChild(listImg);
  projectsBtnDiv.appendChild(projectsPageBtn);
}

export { sideBar, homeBtnDiv, projectsBtnDiv };