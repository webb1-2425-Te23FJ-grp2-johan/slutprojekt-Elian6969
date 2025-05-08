
const menupic = document.querySelector(".menupic")

menupic.addEventListener(
    "click", 
    function(event) {
        console.log(event);
        event.preventDefault();
    menupic.style.display = "flex"
    }
);

