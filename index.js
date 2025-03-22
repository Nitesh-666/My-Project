let tasks = [];
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const allTasksButton = document.getElementById('all-tasks-button');
const completedTasksButton = document.getElementById('completed-tasks-button');
const pendingTasksButton = document.getElementById('pending-tasks-button');

addTaskButton.addEventListener('click', addTask);
allTasksButton.addEventListener('click', showAllTasks);
completedTasksButton.addEventListener('click', showCompletedTasks);
pendingTasksButton.addEventListener('click', showPendingTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            text: taskText,
            completed: false
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskListItem = document.createElement('li');
        taskListItem.classList.add('list-group-item', 'task');
        if (task.completed) {
            taskListItem.classList.add('completed');
        }
        taskListItem.innerHTML = `
            <span>${task.text}</span>
            <button class="btn btn-sm btn-success float-end" onclick="completeTask(${index})">Complete</button>
            <button class="btn btn-sm btn-danger float-end" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskListItem);
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function showAllTasks() {
    renderTasks();
}

function showCompletedTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        if (task.completed) {
            const taskListItem = document.createElement('li');
            taskListItem.classList.add('list-group-item', 'task');
            taskListItem.classList.add('completed');
            taskListItem.innerHTML = `
                <span>${task.text}</span>
                <button class="btn btn-sm btn-success float-end" onclick="completeTask(${index})">Complete</button>
                <button class="btn btn-sm btn-danger float-end" onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(taskListItem);
        }
    });
}

function showPendingTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        if (!task.completed) {
            const taskListItem = document.createElement('li');
            taskListItem.classList.add('list-group-item', 'task');
            taskListItem.innerHTML = `
                <span>${task.text}</span>
                <button class="btn btn-sm btn-success float-end" onclick="completeTask(${index})">Complete</button>
                <button class="btn btn-sm btn-danger float-end" onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(taskListItem);
        }
    });
}
