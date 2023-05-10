const addTaskDiv = document.createElement('div');
const taskForm = document.createElement('form');
const taskNameLabel = document.createElement('label');
const taskNameInput = document.createElement('input');
const taskDescLabel = document.createElement('label');
const taskDescInput = document.createElement('input');
const taskDateLabel = document.createElement('label');
const taskDateInput = document.createElement('input');
const taskPriorityLabel = document.createElement('label');
const taskPrioritySelect = document.createElement('select');
const taskPriorityLow = document.createElement('option');
const taskPriorityMedium = document.createElement('option');
const taskPriorityHigh = document.createElement('option');
const addTaskBtn = document.createElement('button');
const cancelTaskBtn = document.createElement('button');

addTaskDiv.classList.add('add-task');
taskForm.classList.add('task-form');
taskNameLabel.setAttribute('for', 'task-name');
taskDescLabel.setAttribute('for', 'task-description');
taskDateLabel.setAttribute('for', 'task-date');
taskPriorityLabel.setAttribute('for', 'task-priority');
taskNameLabel.textContent = "Name";
taskDescLabel.textContent = "Notes";
taskDateLabel.textContent = "Due";
taskPriorityLabel.textContent = "Priority";
taskNameInput.setAttribute('type', 'text');
taskNameInput.setAttribute('id', 'task-name');
taskNameInput.setAttribute('name', 'task-name');
taskDescInput.setAttribute('type', 'textarea');
taskDescInput.setAttribute('id', 'task-description');
taskDescInput.setAttribute('name', 'task-description');
taskDateInput.setAttribute('type', 'date');
taskDateInput.setAttribute('id', 'task-date');
taskDateInput.setAttribute('name', 'task-date');
taskPrioritySelect.setAttribute('name', 'task-priority');
taskPrioritySelect.setAttribute('id', 'task-priority');
taskPriorityLow.setAttribute('value', 'low');
taskPriorityLow.textContent = "Low"
taskPriorityMedium.setAttribute('value', 'medium');
taskPriorityMedium.textContent = "Medium";
taskPriorityHigh.setAttribute('value', 'high');
taskPriorityHigh.textContent = "High";
addTaskBtn.classList.add('add-task-btn');
addTaskBtn.textContent = "Add task";
cancelTaskBtn.classList.add('cancel-task-btn');
cancelTaskBtn.textContent = "Cancel";

function addTaskForm() {
  const tasksDiv = document.querySelector('.tasks');
  tasksDiv.appendChild(addTaskDiv);
  addTaskDiv.appendChild(taskForm);
  taskForm.appendChild(taskNameLabel);
  taskForm.appendChild(taskNameInput);
  taskForm.appendChild(taskDescLabel);
  taskForm.appendChild(taskDescInput);
  taskForm.appendChild(taskDateLabel);
  taskForm.appendChild(taskDateInput);
  taskForm.appendChild(taskPriorityLabel);
  taskForm.appendChild(taskPrioritySelect);
  taskPrioritySelect.appendChild(taskPriorityLow);
  taskPrioritySelect.appendChild(taskPriorityMedium);
  taskPrioritySelect.appendChild(taskPriorityHigh);
  taskForm.appendChild(cancelTaskBtn);
  taskForm.appendChild(addTaskBtn);
}

export { addTaskForm, addTaskBtn };