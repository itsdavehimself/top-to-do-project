import "./style.css";
import homePage from "./home-page";
import projectsPage from "./projects-page";
import { sideBar, homeBtn, projectsPageBtn  } from "./sidebar";

const contentDiv = document.querySelector('.content');

function openHomePage() {
  contentDiv.removeChild(contentDiv.firstChild);
  homePage();
}

function openProjectsPage() {
  contentDiv.removeChild(contentDiv.firstChild);
  projectsPage();
}


homeBtn.addEventListener('click', openHomePage);
projectsPageBtn.addEventListener('click', openProjectsPage);

homePage();
sideBar();