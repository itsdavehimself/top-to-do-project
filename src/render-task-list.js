function renderTaskList(project) {
  const tasksDiv = document.querySelector('.tasks');
  const tasks = project.taskArr
  tasksDiv.replaceChildren();
  for (let i = 0; i < tasks.length; i+=1) {
    const taskCard = document.createElement('div');
    const taskCheckBox = document.createElement('input');
    const taskCardTitle = document.createElement('p');
    const taskCardDescription = document.createElement('p');
    const taskCardDate = document.createElement('p');
    const taskCardPriority = document.createElement('p');
    const deleteTaskBtn = document.createElement('button');
    taskCard.classList.add('task-card');
    taskCheckBox.setAttribute('type', 'checkbox');
    taskCheckBox.classList.add('task-checkbox');
    taskCheckBox.addEventListener('click', () => {
      project.taskArr.splice(i, 1);
      tasksDiv.removeChild(taskCard);
    });
    taskCardTitle.classList.add('task-card-title');
    taskCardTitle.textContent = project.taskArr[i].taskName;
    taskCardDescription.classList.add('task-card-description')
    taskCardDescription.textContent = project.taskArr[i].description;
    taskCardDate.classList.add('task-card-date');
    taskCardDate.textContent = project.taskArr[i].dueDate;
    taskCardPriority.classList.add('task-card-priority');
    taskCardPriority.textContent = project.taskArr[i].priority;
    deleteTaskBtn.classList.add('delete-task-btn');
    deleteTaskBtn.textContent = 'Delete task';
    deleteTaskBtn.addEventListener('click', () => {
      project.taskArr.splice(i, 1);
      tasksDiv.removeChild(taskCard);
    });
    tasksDiv.appendChild(taskCard);
    taskCard.appendChild(taskCheckBox);
    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardDescription);
    taskCard.appendChild(taskCardDate);
    taskCard.appendChild(taskCardPriority);
    taskCard.appendChild(deleteTaskBtn);
  }
}

export default renderTaskList;