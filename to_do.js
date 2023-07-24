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

function saveEditedTask() {
    // first we will get the txt and make it into a node
    let taskText = this.parentElement.firstChild.value
    let textNode = document.createTextNode(taskText)

    let taskDiv = this.parentElement
    taskDiv.innerHTML = ''
    taskDiv.appendChild(textNode)

    let taskDoneButton = document.createElement('button')
    taskDoneButton.textContent = 'Task Done'
    taskDoneButton.addEventListener('click', markTaskDone)
    taskDiv.appendChild(taskDoneButton)

    let taskEditButton = document.createElement('button')
    taskEditButton.textContent = 'Edit Task'
    taskEditButton.className = 'edit-button'
    taskEditButton.addEventListener('click', editTask)
    taskDiv.appendChild(taskEditButton)
    
    saveTasks()
}

function editTask() {
    let taskText = this.parentElement.firstChild.textContent
    let input = document.createElement('input')
    input.type = 'text'
    input.value = taskText

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'
    saveButton.addEventListener('click', saveEditedTask)

    let taskEditButton = this.parentElement.querySelector('.edit-button')
    taskEditButton.style.display = 'none'

    let taskDiv = this.parentElement
    taskDiv.innerHTML = ''
    taskDiv.appendChild(input)
    taskDiv.appendChild(saveButton)
    taskDiv.appendChild(taskEditButton)
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
    taskDoneButton.className = 'done-button'
    taskDoneButton.addEventListener('click', markTaskDone)

    // creating an edit buton element
    let taskEditButton = document.createElement('button')
    taskEditButton.type = 'button'
    taskEditButton.innerHTML = 'Edit Task'
    taskEditButton.className = 'edit-button'
    taskEditButton.addEventListener('click', editTask)
    
    // create a new paragraph and append the input to it
    let newP = document.createElement('p')
    newP.appendChild(newInput)
    newP.appendChild(taskDoneButton)
    newP.appendChild(taskEditButton)
    
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
        const todoButtons = taskList.getElementsByClassName('done-button')
        const editButtons = taskDone.getElementsByClassName('edit-button')

        for (let i  = 0; i < todoButtons.length; i++) {
            // then it adds the event listeners for each button
            todoButtons[i].addEventListener('click', markTaskDone)
        }

        for (let i  = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', editTask)
        }
    }
}

// This gets the Add Task button and sets up its event listener
let addTaskButton = document.getElementById('addTaskButton')
addTaskButton.addEventListener('click', addTask)


// This loads the tasks when the page loads
window.onload = loadSavedTasks