// Store tasks
let tasks = [];

// DOM elements
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Add task
button.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") return;

  const task = {
    id: Date.now(),
    text: value,
    completed: false
  };

  tasks.push(task);
  input.value = "";

  renderTasks();
});

// Render tasks
function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;

    if (task.completed) {
      li.classList.add("completed");
    }

    list.appendChild(li);
  });
}

// Toggle complete
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed} : task
  );

  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}