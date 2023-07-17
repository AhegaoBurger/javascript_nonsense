function saveTasks() {
    const taskList = document.getElementById('taskList')
    const taskDone = document.getElementById('taskDone')

    const tasks = {
        todo: taskList.innerHTML,
        done: taskDone.innerHTML,
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// This functions is for handling task completion
function markTaskDone() {
    const doneList = document.getElementById('taskDone')
    doneList.appendChild(this.parentElement)
    this.remove()
    alert('Task Done')
    saveTasks()
}

function addTask() {
    // get the task input element
    let taskInput = document.getElementById('tname')
    
    // create a new div element
    let newInput = document.createElement('div')
    newInput.textContent = taskInput.value
    
    // creating a mark done button element
    let taskDoneButton = document.createElement('button')
    taskDoneButton.type = 'button'
    taskDoneButton.innerHTML = 'Task Done'
    taskDoneButton.addEventListener('click', markTaskDone)
    
    // create a new paragraph and append the input to it
    let newP = document.createElement('p')
    newP.appendChild(newInput)
    newP.appendChild(taskDoneButton)
    
    // get the task list div and append the new paragraph to it
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newP)
    
    // after all the changes we reset the task input value to an empty string
    taskInput.value = ''
    
    // Save the tasks so that when the user reloads the page, they will still be there
    saveTasks()
}

// This function handles loading the saved tasks
function loadSavedTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    
    if (savedTasks) {
        const taskList = document.getElementById('taskList')
        const taskDone = document.getElementById('taskDone')
        
        taskList.innerHTML = savedTasks.todo
        taskDone.innerHTML = savedTasks.done

        // This will get all the Task Done buttons
        const todoButtons = taskList.getElementsByTagName('button')
        const doneButtons = taskDone.getElementsByTagName('button')

        for (let i  = 0; i < todoButtons.length; i++) {
            // then it adds the event listeners for each button
            todoButtons[i].addEventListener('click', markTaskDone)
        }

        for (let i  = 0; i < doneButtons.length; i++) {
            doneButtons[i].remove()
        }
    }
}

// This gets the Add Task button and sets up its event listener
let addTaskButton = document.getElementById('addTaskButton')
addTaskButton.addEventListener('click', addTask)


// This loads the tasks when the page loads
window.onload = loadSavedTasks