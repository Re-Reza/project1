let scrollButton = document.getElementById("scrollUpButton");
document.addEventListener("wheel", showScrollButtton);
let scrollUP = ()=>{
    let scrollY = window.pageYOffset; 
    window.scrollBy(0, -scrollY);
}
scrollButton.addEventListener("click", scrollUP);
function showScrollButtton()
{
    if(window.pageYOffset >=200)
    {
        scrollButton.style.display="block";
    }
    else{
        scrollButton.style.display="none";
    }
}