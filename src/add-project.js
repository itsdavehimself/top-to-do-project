import { createProject } from "./task";

function addProject(e) {
  const projectName = document.getElementById('project-name').value;
  const project = createProject(projectName);
  const addProjectForm = document.querySelector('.create-project');
  const contentDiv = document.querySelector('.content');
  console.log(project);
  console.log(project.id);
  document.getElementById('project-name').value = '';
  contentDiv.removeChild(addProjectForm);
  e.preventDefault();
}

export default addProject;