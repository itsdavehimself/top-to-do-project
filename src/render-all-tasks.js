import { projectArr } from "./task";

function allTasks() {
  const allTasksDiv = document.createElement('div');
  const homeDiv = document.querySelector('.home-container');
  const allTasksHeader = document.createElement('p');
  const allTaskArr = [];
  homeDiv.replaceChildren();
  allTasksDiv.classList.add('all-tasks');
  homeDiv.appendChild(allTasksHeader);
  homeDiv.appendChild(allTasksDiv);
  for (let i = 0; i < projectArr.length; i+=1) {
    const project = projectArr[i]
    for (let j = 0; j < project.taskArr.length; j+=1) {
      const task = project.taskArr[j];
      const taskCard = document.createElement('div');
      const taskCardTitle = document.createElement('p');
      const taskCardProjectName = document.createElement('p');
      const taskCardDate = document.createElement('p');
      const taskCardDescription = document.createElement('p');
      const taskCardPriority = document.createElement('p');
      const {taskName} = task;
      const {dueDate} = task;
      const {description} = task;
      const {priority} = task;
      const projectName = project.name;
      allTaskArr.push(task);

      taskCard.classList.add('home-task-card')
      taskCard.setAttribute('project-id', project.id);
      taskCard.setAttribute('task-id', task.id);
      taskCardTitle.textContent = taskName;
      taskCardTitle.classList.add('home-task-name');
      taskCardProjectName.textContent = projectName;
      taskCardProjectName.classList.add('home-task-project');
      taskCardDate.textContent = dueDate;
      taskCardDate.classList.add('home-task-date');
      taskCardDescription.textContent = description;
      taskCardDescription.classList.add('home-task-description');
      taskCardPriority.textContent = priority;
      taskCardPriority.classList.add('home-task-priority');
      allTasksDiv.appendChild(taskCard);
      taskCard.appendChild(taskCardTitle);
      taskCard.appendChild(taskCardProjectName);
      taskCard.appendChild(taskCardDate);
      taskCard.appendChild(taskCardDescription);
      taskCard.appendChild(taskCardPriority);
    }
  }
  allTasksHeader.classList.add('all-tasks-header');
  allTasksHeader.textContent = `All tasks (${allTaskArr.length})`;
};

export default allTasks;