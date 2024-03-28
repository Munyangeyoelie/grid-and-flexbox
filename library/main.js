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

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
let newBook = document.querySelector("#book");
newBookbtn.addEventListener("click", function {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let page = document.querySelector("#page").value;
  let newBook = new Book(title, author, page);
  myLibrary.push(newBook);
  console.log(myLibrary);
}
