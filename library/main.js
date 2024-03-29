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
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", () => {
  let newBookForm = document.querySelector("#add-book");

  let title = newBookForm.elements.title;
  let author = newBookForm.elements.author;
  let page = newBookForm.elements.page;
  let read = newBookForm.elements.read;

  let newBook = new Book(title.value, author.value, page.value, read.checked);

  myLibrary.push(newBook);

  displayLibrary();

  newBookForm.reset();
});

function Book(title, author, page, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function displayLibrary() {
  let output = document.querySelector("#output");

  output.innerHTML = "";

  for (let book of myLibrary) {
    output.innerHTML += `
      <div class="book">
        <h3>${book.title} by ${book.author}</h3>
        <p>${book.page} pages</p>
        <p>${book.read ? "Yes" : "No"} read</p>
      </div>
    `;
  }
}

displayLibrary();
