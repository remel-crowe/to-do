import { createTask } from "./task";

export const taskRepository = (() => {
  let currentTasks = [];

  function getTasks() {
    return currentTasks;
  }

  function addNewTask(obj) {
    const { title, description, date, priority } = obj;
    let newTask = createTask(title, description, date, priority);
    currentTasks.push(newTask);
  }

  function removeTask(task) {
    const index = currentTasks.indexOf(task);
    if (index !== -1) {
      currentTasks.splice(index, 1);
    }
  }

  return { getTasks, addNewTask, removeTask };
})();
