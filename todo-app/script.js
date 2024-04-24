// const container = document.querySelector(".container");
// const addTaskConatiner = document.querySelector(".add-task-conatiner");
// const addTask = document.querySelector(".add-task");
// const addName = document.querySelector(".add-name");
// const addAuther = document.querySelector(".add-auther");
// const addPages = document.querySelector(".add-pages");

const form = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate inputs (optional)
  // You can add checks for empty fields, email format, etc.

  const data = {
    name: name,
    email: email,
  };

  // Store data in local storage
  localStorage.setItem("userData", JSON.stringify(data));

  // Display output on the web screen
  outputDiv.textContent = `Name: ${name}\nEmail: ${email}`;

  // (Optional) Clear form
  // You can uncomment this line to clear the form after submission
  // form.reset();
});

// Retrieve and display data from local storage (optional)
window.onload = () => {
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    outputDiv.textContent += `\n\nPreviously Stored Data:\nName: ${parsedData.name}\nEmail: ${parsedData.email}`;
  }
};
