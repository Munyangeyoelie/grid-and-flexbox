const title = document.getElementById("title");
const author = document.getElementById("author");
const page = document.getElementById("page");
const addBook = document.getElementById("addBook");
const output = document.getElementById("output");

function myLibrary() {
  output.innerHTML = title.value + author.value + page.value;
}
addBook.addEventListener("click", myLibrary);
