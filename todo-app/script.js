const container = document.querySelector(".container");
const addTaskConatiner = document.querySelector(".add-task-conatiner");
const addTask = document.querySelector(".add-task");
const addName = document.querySelector(".add-name");
const addAuther = document.querySelector(".add-auther");
const addPages = document.querySelector(".add-pages");

const outputDiv = document.getElementById("output");
addTask.addEventListener("click", function () {
  const task = addName.value;
  const auther = addAuther.value;
  const pages = addPages.value;
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskName = document.createElement("p");
  taskName.textContent = task;

  // Create a new p element for the author
  const authorName = document.createElement("p");
  authorName.textContent = `Author: ${author}`;

  // Create a new p element for the number of pages
  const pagesCount = document.createElement("p");
  pagesCount.textContent = `Pages: ${pages}`;

  // Append the task details to the task div
  taskDiv.appendChild(taskName);
  taskDiv.appendChild(authorName);
  taskDiv.appendChild(pagesCount);

  // Append the task div to the output div
  outputDiv.appendChild(taskDiv);

  // Clear the input fields
  addName.value = "";
  addAuther.value = "";
  addPages.value = "";
});
