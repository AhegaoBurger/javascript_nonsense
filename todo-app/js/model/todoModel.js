class TodoModel {
    constructor() {
        // This will fetch the tasks from local storage and if its doesn't find any will return an empty array
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || { todo: [], done: []}
    }

    saveTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    addTask(task) {
        this.tasks.todo.push(task)
        this.saveTask()
    }

    markTaskDone(task) {
        this.tasks.todo = this.tasks.todo.filter(t => t !== task)
        this.tasks.done.push(task)
        this.saveTask()
    }

    editTask(oldTask, newTask) {
        const todoIndex = this.tasks.todo.indexOf(oldTask)
        if (todoIndex !== -1) {
            this.tasks.todo[todoIndex] = newTask
        } else {
            const doneIndex = this.tasks.done.indexOf(oldTask)
            if (doneIndex !== -1) {
                this.tasks.done[doneIndex] = newTask
            }
        }
        this.saveTask()
    }
}