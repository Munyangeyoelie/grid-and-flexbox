const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
  alert("New Book");
  let newBookForm = document.querySelector("#new-book-form");
  newBookBtn.style.display = "block";
});
