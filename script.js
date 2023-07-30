// Get necessary elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'taskItem';

        // Create a span element for the task text
        const taskTextSpan = document.createElement('span');
        taskTextSpan.className = 'taskText';
        taskTextSpan.innerText = taskText;

        // Create a button element for deleting the task
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', removeTask);

        

        // Append the task text and delete button to the list item
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to mark a task as completed
function completeTask() {
    this.classList.toggle('completed');
}

// Function to remove a task
function removeTask() {
    this.parentNode.remove();
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', function (event) {
    if (event.target && event.target.nodeName === 'SPAN') {
        event.target.addEventListener('click', completeTask);
    }
});
