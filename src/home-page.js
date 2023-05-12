import allTasks from "./render-all-tasks";

const contentDiv = document.querySelector('.content');
const homeDiv = document.createElement('div');

homeDiv.classList.add('home-container');

function homePage() {
  contentDiv.appendChild(homeDiv);
  allTasks();
}

export default homePage;