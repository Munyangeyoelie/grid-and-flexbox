const accordin = document.getElementById("content-container");
for (var i = 0; i < accordin.length; i++) {
  accordin[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
