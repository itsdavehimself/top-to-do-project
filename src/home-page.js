const contentDiv = document.querySelector('.content');
const homeDiv = document.createElement('div');

homeDiv.classList.add('home-container');

function homePage() {
  contentDiv.appendChild(homeDiv);
}

export default homePage;