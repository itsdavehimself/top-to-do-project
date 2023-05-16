import note from './note-check-outline.svg';

const headerDiv = document.querySelector('.header');
const headerIcon = document.createElement('img');
const headerText = document.createElement('p');

headerIcon.src = note;
headerIcon.classList.add('header-logo');
headerText.textContent = 'To-do List';
headerText.classList.add('header-text');

function createHeader() {
  headerDiv.appendChild(headerIcon);
  headerDiv.appendChild(headerText);
}

export default createHeader;
