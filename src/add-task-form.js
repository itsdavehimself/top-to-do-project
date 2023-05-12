import renderTaskList from "./render-task-list";

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

addTaskDiv.classList.add('add-task-form');
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

function addTask(project) {
  return (e) => {
    e.preventDefault();
    console.log(`just ran add task function for project: ${project.name}`);
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDate = document.getElementById('task-date').value;
    const taskPriority = document.getElementById('task-priority').value;
    const tasksDiv = document.querySelector('.tasks');
    project.createTask(taskName, taskDescription, taskDate, taskPriority);
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-priority').value = '';
    tasksDiv.removeChild(addTaskDiv);
    console.log(project);
    renderTaskList(project);
  }
};

function cancelTask(project) {
  return (e) => {
    e.preventDefault();
    const tasksDiv = document.querySelector('.tasks');
    console.log(`ran cancel task fnction for project: ${project.name}`);
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-priority').value = '';
    tasksDiv.removeChild(addTaskDiv);
  }
}

function addTaskForm(project) {
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
  console.log(`about to run add task function for project: ${project.name}`)
  addTaskBtn.addEventListener('click', addTask(project), {once: true});
  cancelTaskBtn.addEventListener('click', cancelTask(project), {once: true});
}

export { addTaskForm, addTaskBtn, cancelTaskBtn };