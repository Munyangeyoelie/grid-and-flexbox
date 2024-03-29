// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const page = document.getElementById("page");
// const addBook = document.getElementById("addBook");
// const output = document.getElementById("output");

// function myLibrary() {
//   output.innerHTML = title.value + author.value + page.value;
// }
// addBook.addEventListener("click", myLibrary);
// console.log("Hello");
const myLibrary = [];

function Book(title, author, page, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let page = document.getElementById("page").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
let newBook = document.querySelector("#book");
book.addEventListener("click", function () {
  let newBookForm = document.querySelector("addBook");
  newBookFrom.style.display = "block";
});
