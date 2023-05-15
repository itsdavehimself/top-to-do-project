import { format, formatDistance, isPast } from "date-fns";
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
      const taskCardContainer = document.createElement('div');
      const taskCard = document.createElement('div');
      const taskCardCheckDiv = document.createElement('div');
      const taskCardCheck = document.createElement('div');
      const taskCardInfoDiv = document.createElement('div');
      const taskCardTitleDiv = document.createElement('div');
      const taskCardTitle = document.createElement('p');
      const taskCardBottomDiv = document.createElement('div');
      const taskCardProjectDiv = document.createElement('div');
      const taskCardProjectLabel = document.createElement('p');
      const taskCardProjectName = document.createElement('p');
      const taskCardDateDiv = document.createElement('div');
      const taskCardDateIcon = document.createElement('img');
      const taskCardDate = document.createElement('p');
      const taskCardDescription = document.createElement('p');
      const taskCardPriorityDiv = document.createElement('div');
      const taskCardPriorityLabel = document.createElement('p');
      const taskCardPriority = document.createElement('p');
      const taskCardDeleteDiv = document.createElement('div');
      const {taskName} = task;
      const {description} = task;
      const {priority} = task;
      const projectName = project.name;
      allTaskArr.push(task);

      if (project.taskArr[j].priority === 'low') {
        taskCardPriority.classList.add('task-card-priority-low');
      } else if (project.taskArr[i].priority === 'medium') {
        taskCardPriority.classList.add('task-card-priority-medium');
      } else {
        taskCardPriority.classList.add('task-card-priority-high');
      };

      const dateArr = project.taskArr[j].dueDate.split('-');
      const year = dateArr[0]
      const month = (Number(dateArr[1]) - 1).toString();
      const date = Number(dateArr[2]);
      const formattedDate = format(new Date(year, month, date), 'MMMM do, y');
      const today = new Date();
      const todaysDay = today.getDate();
      const todaysMonth = today.getMonth();
      const todaysYear = today.getFullYear();
      const dateDistance = formatDistance(new Date(year, month, date), new Date(todaysYear, todaysMonth, todaysDay), {
        addSuffix: true
      });
  
      if (isPast(new Date(year, month, date))) {
        taskCardDate.textContent = `Due: ${dateDistance}`
        taskCardDate.classList.add('overdue');
      } else if (formatDistance(new Date(year, month, date), new Date(todaysYear, todaysMonth, todaysDay)) === '1 day') {
        taskCardDate.textContent = `Due: tomorrow`;
      } else {
        taskCardDate.textContent = `Due: ${formattedDate}`
      };

      taskCardContainer.classList.add('home-task-card-container');
      taskCardCheckDiv.classList.add('home-task-check-div');
      taskCardCheck.classList.add('home-task-check');
      taskCardInfoDiv.classList.add('home-task-info-div');
      taskCardDeleteDiv.classList.add('home-task-del-div');
      taskCardTitleDiv.classList.add('home-task-title-div');
      taskCardBottomDiv.classList.add('home-task-bottom-div');
      taskCard.classList.add('home-task-card')
      taskCard.setAttribute('project-id', project.id);
      taskCard.setAttribute('task-id', task.id);
      taskCardTitle.textContent = taskName;
      taskCardTitle.classList.add('home-task-name');
      taskCardProjectDiv.classList.add('home-task-project-div')
      taskCardProjectLabel.classList.add('home-task-project-label');
      taskCardProjectLabel.textContent = 'Project: ';
      taskCardProjectName.textContent = projectName;
      taskCardProjectName.classList.add('home-task-project');
      taskCardDateDiv.classList.add('home-task-date-div');
      taskCardDateIcon.classList.add('home-task-date-icon');
      taskCardDate.classList.add('home-task-date');
      taskCardDescription.textContent = description;
      taskCardDescription.classList.add('home-task-description');
      taskCardPriorityDiv.classList.add('home-task-priority-div');
      taskCardPriorityLabel.classList.add('home-task-priority-label');
      taskCardPriorityLabel.textContent = 'Priority: '
      taskCardPriority.textContent = priority;
      taskCardPriority.classList.add('home-task-priority');
      allTasksDiv.appendChild(taskCardContainer);
      taskCardContainer.appendChild(taskCard);
      taskCard.appendChild(taskCardCheckDiv);
      taskCardCheckDiv.appendChild(taskCardCheck);
      taskCard.appendChild(taskCardInfoDiv);
      taskCardInfoDiv.appendChild(taskCardTitleDiv);
      taskCardTitleDiv.appendChild(taskCardTitle);
      taskCardInfoDiv.appendChild(taskCardBottomDiv);
      taskCardBottomDiv.appendChild(taskCardDescription);
      taskCardBottomDiv.appendChild(taskCardDateDiv);
      taskCardDateDiv.appendChild(taskCardDateIcon);
      taskCardDateDiv.appendChild(taskCardDate);
      taskCardBottomDiv.appendChild(taskCardPriorityDiv);
      taskCardPriorityDiv.appendChild(taskCardPriorityLabel);
      taskCardPriorityDiv.appendChild(taskCardPriority);
      taskCardBottomDiv.appendChild(taskCardProjectDiv);
      taskCardProjectDiv.appendChild(taskCardProjectLabel);
      taskCardProjectDiv.appendChild(taskCardProjectName);
      taskCard.appendChild(taskCardDeleteDiv);
    }
  }
  allTasksHeader.classList.add('all-tasks-header');
  allTasksHeader.textContent = `All tasks (${allTaskArr.length})`;
};

export default allTasks;