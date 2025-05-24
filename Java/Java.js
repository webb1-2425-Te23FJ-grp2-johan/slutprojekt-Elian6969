const menupic = document.classList.querySelector(".menupic"); 
const offscreen = document.classList.querySelector(".menu-div");
const onscreen = document.classList.querySelector(".ham-menu");

menupic.addEventListener("click", function(event) {
  offscreen.toggle("active");
  onscreen.toggle("active");
});