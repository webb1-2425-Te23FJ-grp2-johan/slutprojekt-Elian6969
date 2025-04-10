const menu=document.querySelector(".menu");
const menuPic=document.querySelector(".menu-pic");

menu.addEventListener("click", (e)=>{
    e.preventDefault();
    menuPic.classList.toggle(".menu-pic")
})
