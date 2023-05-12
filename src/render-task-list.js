function renderTaskList(project) {
  const tasksDiv = document.querySelector('.tasks');
  const tasks = project.taskArr
  tasksDiv.replaceChildren();
  for (let i = 0; i < tasks.length; i+=1) {
    const taskCard = document.createElement('div');
    const taskCardTitle = document.createElement('p');
    const taskCardDescription = document.createElement('p');
    const taskCardDate = document.createElement('p');
    const taskCardPriority = document.createElement('p');
    taskCard.classList.add('task-card');
    taskCardTitle.classList.add('task-card-title');
    taskCardTitle.textContent = project.taskArr[i].taskName;
    taskCardDescription.classList.add('task-card-description')
    taskCardDescription.textContent = project.taskArr[i].description;
    taskCardDate.classList.add('task-card-date');
    taskCardDate.textContent = project.taskArr[i].dueDate;
    taskCardPriority.classList.add('task-card-priority');
    taskCardPriority.textContent = project.taskArr[i].priority;
    tasksDiv.appendChild(taskCard);
    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardDescription);
    taskCard.appendChild(taskCardDate);
    taskCard.appendChild(taskCardPriority);
  }
}

export default renderTaskList;