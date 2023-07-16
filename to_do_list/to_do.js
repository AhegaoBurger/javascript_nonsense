function addTask() {
    // get the task input element
    let taskInput = document.getElementById('tname')
    
    // create a new input element
    let newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.value = taskInput.value
    
    // creating a mark done button element
    let markTaskDone = document.createElement('button')
    markTaskDone.type = 'button'
    markTaskDone.innerHTML = 'Task Done'
    markTaskDone.addEventListener('click' ,function() {
        let doneList = 
    })
    
    // create a new paragraph and append the input to it
    let newP = document.createElement('p')
    newP.appendChild(newInput)
    newP.appendChild(markTaskDone)
    
    // get the task list div and append the new paragraph to it
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newP)
    
    // after all the changes we reset the task input value to an empty string
    taskInput.value = ''
    
    // Save the tasks so that when the user reloads the page, they will still be there
    localStorage.setItem('tasks', taskList.innerHTML)

    // alert('Task added to the list')
}

// This functions is for handling task completion
function markTaskDone() {
    const doneList = document.getElementById('taskDone')
    doneList.appendChild(this.parentElement)
    this.remove()
    alert('Task Done')
}

// This function handles loading the saved tasks
function loadSavedTasks() {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
        taskList.innerHTML = savedTasks

        // This will get all the Task Done buttons

    }
}

// This gets the Add Task button and sets up its event listener
let addTaskButton = document.getElementById('addTaskButton')
addTaskButton.addEventListener('click', addTask)


// This loads the tasks when the page loads
window.onload = loadSavedTasks