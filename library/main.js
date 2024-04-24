const openBtn = document.getElementsByClassName("add-new-book");
const closeBtn = document.getElementById("close-btn");
const modalCantainer = document.getElementsByClassName("new-book-form");

//functionality
openBtn.addEventListener("click", function () {
  modalCantainer.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modalCantainer.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target == modalCantainer) {
    modalCantainer.style.display = "none";
  }
});
