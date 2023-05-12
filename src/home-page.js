import { projectArr } from "./task";

const contentDiv = document.querySelector('.content');
const homeDiv = document.createElement('div');
const allTasks = document.createElement('div');

homeDiv.classList.add('home-container');
allTasks.classList.add('all-tasks');

function homePage() {
  contentDiv.appendChild(homeDiv);
  homeDiv.appendChild(allTasks);
}

export default homePage;