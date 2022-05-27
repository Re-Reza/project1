let menuButton = document.getElementById("munu-buton");
let menu = document.querySelector(".sub-nav-sideBarMenu");
let closeButton = document.querySelector("#closeIcon");
menuButton.addEventListener("click", showHideMenu);
closeButton.addEventListener("click", closeMenu);

function showHideMenu()
{
    menu.classList.add("showMenu");  
}

function closeMenu()
{
    menu.classList.remove("showMenu");
}