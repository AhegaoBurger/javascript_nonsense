class TodoController {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.addTaskButton = document.getElementById('addTaskButton')
        this.addTaskButton.addEventListener('click', () => this.addTask())

        this.loadSavedTasks()
    }

    addTask() {
        let taskInput = document.getElementById('tname')
        let task = taskInput.value
        taskInput.value = ''

        this.model.addTask(task)

        this.view.updateTaskList(this.model.tasks.todo)
    }



    markTaskDone(index) {
        this.model.markTaskDone(index)

        this.view.updateTaskList(this.model.tasks.todo)
    }
}