import { taskRepository } from "./taskRepository";

export const handleDom = (() => {
  const content = document.getElementById("tasks");
  const dialog = document.querySelector("#dialog");
  const addTaskButton = document.getElementById("addTask-btn");
  const closeDialog = document.getElementById("dialogCloseBtn");
  const formButton = document.getElementById("taskSubmit");
  const form = document.getElementById("frm");

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const priority = document.getElementById("priority");

  addTaskButton.addEventListener("click", () => {
    dialog.showModal();
  });
  closeDialog.addEventListener("click", () => {
    dialog.close();
  });

  function getValues() {
    return {
      title: title.value,
      description: description.value,
      date: date.value,
      priority: priority.value,
    };
  }

  function displayTasks() {
    content.innerHTML = "";
    let currentTasks = taskRepository.getTasks();
    currentTasks.forEach((task) => {
      let taskDiv = document.createElement("div");
      taskDiv.innerHTML = `
          <p>${task.title}</p>
          <p>${task.description}</p>
          <p>${task.date}</p>
          <p>${task.priority}</p>
          `;
      content.appendChild(taskDiv);
    });
  }

  formButton.addEventListener("click", (event) => {
    event.preventDefault();
    const values = getValues();
    // console.log(values);
    taskRepository.addTask(values);
    form.reset();
    dialog.close();
    displayTasks();
  });
})();
