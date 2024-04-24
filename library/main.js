const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  //   myLibrary.push(newBook);
  //   console.log(myLibrary);
}
let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});
document.querySelector(".add-book").addEventListener("click", function () {
  event.preventDefault();
  addBookToLibrary();
});
