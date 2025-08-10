document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Create a new task element
  function createTaskItem(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.style.flex = "1";

    // Toggle completed state on click
    span.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggling complete on delete click
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskInput.focus();
  }

  addTaskBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
