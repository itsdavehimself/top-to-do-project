import "./style.css";
import homePage from "./home-page";
import projectsPage from "./projects-page";
import { sideBar, homeBtnDiv, projectsBtnDiv } from "./sidebar";

const contentDiv = document.querySelector('.content');

function openHomePage() {
  contentDiv.removeChild(contentDiv.firstChild);
  homeBtnDiv.classList.add('active');
  projectsBtnDiv.classList.remove('active');
  homePage();
}

function openProjectsPage() {
  contentDiv.removeChild(contentDiv.firstChild);
  projectsBtnDiv.classList.add('active');
  homeBtnDiv.classList.remove('active');
  projectsPage();
}


homeBtnDiv.addEventListener('click', openHomePage);
projectsBtnDiv.addEventListener('click', openProjectsPage);
homeBtnDiv.classList.add('active');

homePage();
sideBar();