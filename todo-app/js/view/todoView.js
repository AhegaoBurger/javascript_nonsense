class TodoView{
    constructor() {
        this.taskListElement = document.getElementById('taskList')
        this.taskListElement = document.getElementById('taskDone')
    }

    createTaskElement(task, index) {
        let taskElement = document.createElement('div')
        taskElement.textContent = task

        let doneButton = document.createElement('button')
        doneButton.textContent= 'Done'
        doneButton.addEventListener('click', () => todoController.markTaskDone(index))

        let editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', () => {
            const newTask = prompt('Edit task:', task)
            if (newTask) {
                todoController.editTask(index, newTask)
            }
        })

        taskElement.appendChild(doneButton)
        taskElement.appendChild(editButton)

        return taskElement
    }
}