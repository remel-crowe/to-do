import Task from "./task";

export default class TaskRepository {
  constructor(id) {
    this.id = id;
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    const { title, description, date, priority } = task;
    let newTask = new Task(title, description, date, priority);
    this.tasks.push(newTask);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
