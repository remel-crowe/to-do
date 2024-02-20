import TaskRepository from "./taskRepository";

export const handleDom = (() => {
  const default_repo = new TaskRepository("DEFAULT");
  const content = document.getElementById("tasks");
  const dialog = document.querySelector("#dialog");
  const addTaskButton = document.getElementById("add-task-btn");
  const closeDialog = document.getElementById("dialogCloseBtn");
  const formButton = document.getElementById("taskSubmit");
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

  formButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleAdd(default_repo);
    displayTasks(default_repo);
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

  function displayTasks(repo) {
    content.innerHTML = ""; // Clear content

    repo.getTasks().forEach((task) => {
      const taskElement = createTaskElement(task);
      content.appendChild(taskElement);
    });
  }

  function createTaskElement(task) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `
      <div class="task-content">
        <p>${task.title}</p>
        <p>${task.description}</p>
        <p class="date">${task.date}</p>
        <p class="priority">${task.priority}</p>
      </div>
      <div class="task-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    `;
    return div;
  }

  function handleAdd(repo) {
    const values = getValues();
    repo.addTask(values);
  }
})();
