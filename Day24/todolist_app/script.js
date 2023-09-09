var input = document.querySelector(".input");
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (input == "") {
    alert("Enter Input Please");
  }
});
