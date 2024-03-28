var library = [];

var Book = function Book(name, aothor, page) {
  this.name = name;
  this.aothor = aothor;
  this.page = page;
};

Book.prototype.getInfo = function getInfo() {
  return this.name + " by " + this.aothor + " on page " + this.page;
};
