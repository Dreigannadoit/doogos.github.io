const nav = document.getElementById("nav");
const menu = document.getElementById("openMenu");

menu.addEventListener("click", openMenu);

function openMenu(){
    nav.classList.toggle("active");
}