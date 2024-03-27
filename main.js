function Book(name, author) {
  this.title = name;
  this.author = author;
}
const Book1 = new Book("Book 1", "Ngeyo");
const Book2 = new Book("book 2", "Prince");

console.log(Book1.title);

console.log(Book1.author);

console.log(Book2.title);

console.log(Book2.author);

const Book3 = {
  title: "Book 3",
  author: "Ngeyo",
};

console.log(Book3.title);

console.log(Book3.author);
