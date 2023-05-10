function displayTask(taskArr) {
  const tasksDiv = document.querySelector('.tasks');
  const newTaskBtn = document.querySelector('.new-task')
  const taskCard = document.createElement('div');
  const taskNameDisplay = document.createElement('p');
  const taskNoteDisplay = document.createElement('p');
  const taskDateDisplay = document.createElement('p');
  const taskPriorityDisplay = document.createElement('p');
  taskNameDisplay.classList.add('task-card-name');
  taskNoteDisplay.classList.add('task-card-note');
  taskDateDisplay.classList.add('task-card-date');
  taskPriorityDisplay.classList.add('task-card-priority');
  taskCard.classList.add('task-card');

  for (let i = 0; i < taskArr.length; i+=1) {
    const {taskName} = taskArr[i];
    const {description} = taskArr[i];
    const {dueDate} = taskArr[i];
    const {priority} = taskArr[i];
    const {id} = taskArr[i];
    taskCard.setAttribute('task-id', id)
    taskNameDisplay.textContent = `${taskName}`;
    taskNoteDisplay.textContent = `${description}`;
    taskDateDisplay.textContent = `${dueDate}`;
    taskPriorityDisplay.textContent = `${priority}`;
    tasksDiv.insertBefore(taskCard, newTaskBtn);
    taskCard.appendChild(taskNameDisplay);
    taskCard.appendChild(taskNoteDisplay);
    taskCard.appendChild(taskDateDisplay);
    taskCard.appendChild(taskPriorityDisplay);
  }
};

export default displayTask;