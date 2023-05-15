import trashIcon from './trash-can-outline.svg';
import calendarIcon from './calendar-multiselect.svg';
import checkMark from './check.svg';

function renderTaskList(project) {
  const tasksDiv = document.querySelector('.tasks');
  const tasks = project.taskArr
  tasksDiv.replaceChildren();
  for (let i = 0; i < tasks.length; i+=1) {
    const taskCard = document.createElement('div');
    const taskCheckBoxDiv = document.createElement('div');
    const taskCheckBox = document.createElement('div');
    const taskCardInfo = document.createElement('div');
    const taskCardSecondary = document.createElement('div');
    const taskCardTitle = document.createElement('p');
    const taskCardDescription = document.createElement('p');
    const taskCardDate = document.createElement('p');
    const taskCardPriorityDiv = document.createElement('div');
    const taskCardPriorityTitle = document.createElement('p');
    const taskCardPriority = document.createElement('p');
    const deleteTaskBtn = document.createElement('button');
    const trashCan = document.createElement('img');
    const calendar = document.createElement('img');
    const check = document.createElement('img');
    const taskCardDateDiv = document.createElement('div');

    trashCan.src = trashIcon;
    trashCan.classList.add('trash-icon-task');
    calendar.src = calendarIcon;
    calendar.classList.add('calendar-icon');
    check.src = checkMark;
    check.classList.add('check-icon-task');
    taskCardInfo.classList.add('task-card-info');
    taskCard.classList.add('task-card');
    taskCheckBoxDiv.classList.add('task-checkbox-div');
    taskCheckBox.classList.add('task-checkbox');
    taskCheckBox.addEventListener('click', () => {
      project.taskArr.splice(i, 1);
      tasksDiv.removeChild(taskCard);
    });
    taskCardPriorityDiv.classList.add('task-priority-div');
    taskCardPriorityTitle.classList.add('task-card-priority-title')
    taskCardTitle.classList.add('task-card-title');
    taskCardSecondary.classList.add('task-card-secondary');
    taskCardTitle.textContent = project.taskArr[i].taskName;
    taskCardDescription.classList.add('task-card-description')
    taskCardDescription.textContent = project.taskArr[i].description;
    taskCardDateDiv.classList.add('task-card-date-div');
    taskCardDate.classList.add('task-card-date');
    taskCardDate.textContent = project.taskArr[i].dueDate;

    if (project.taskArr[i].priority === 'low') {
      taskCardPriority.classList.add('task-card-priority-low');
    } else if (project.taskArr[i].priority === 'medium') {
      taskCardPriority.classList.add('task-card-priority-medium');
    } else {
      taskCardPriority.classList.add('task-card-priority-high');
    };
    
    taskCardPriorityTitle.textContent = 'Priority: ';
    taskCardPriority.textContent = project.taskArr[i].priority;
    deleteTaskBtn.classList.add('delete-task-btn');
    deleteTaskBtn.appendChild(trashCan);
    deleteTaskBtn.addEventListener('click', () => {
      project.taskArr.splice(i, 1);
      tasksDiv.removeChild(taskCard);
    });
    tasksDiv.appendChild(taskCard);
    taskCard.appendChild(taskCheckBoxDiv);
    taskCheckBoxDiv.appendChild(taskCheckBox);
    taskCheckBox.appendChild(check);
    taskCard.appendChild(taskCardInfo);
    taskCardInfo.appendChild(taskCardTitle);
    taskCardInfo.appendChild(taskCardSecondary);
    taskCardSecondary.appendChild(taskCardDescription);
    taskCardSecondary.appendChild(taskCardDateDiv);
    taskCardDateDiv.appendChild(calendar);
    taskCardDateDiv.appendChild(taskCardDate);
    taskCardSecondary.appendChild(taskCardPriorityDiv);
    taskCardPriorityDiv.appendChild(taskCardPriorityTitle);
    taskCardPriorityDiv.appendChild(taskCardPriority);
    taskCard.appendChild(deleteTaskBtn);
  }
}

export default renderTaskList;