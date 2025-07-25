const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
displayTasks()

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== ''){
        tasks.push({text: taskText});
        saveTasksToLocalStorage();
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
    saveTasksToLocalStorage();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasksToLocalStorage();
    displayTasks();
}

function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
}

function clearAllTasks() {
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);