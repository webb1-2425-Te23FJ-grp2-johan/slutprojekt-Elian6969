const menupic = document.querySelector(".menupic img"); 
const offscreen = document.querySelector(".menu-div");

menupic.addEventListener("click", function(event) {
  offscreen.classList.toggle("active");
});