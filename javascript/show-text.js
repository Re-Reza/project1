var text = document.querySelectorAll(".section2-box-titleContainer h3");
console.log(text);
function checkPositoin()
{
    var textShowerRight = window.getComputedStyle(document.querySelector('.section2-box-titleContainer'), ':after').getPropertyValue("right");
    console.log(textShowerRight);
    if(textShowerRight >= 90+"px" && textShowerRight<=100+"px")
    {
        console.log("yes");
        for(var i=0; i<text.length; i++)
        {
            text[i].style.display="block";
        }
    }
    if(textShowerRight > 215+"px")
    {
        console.log("no");
        for(var i=0; i<text.length; i++)
        {
            text[i].style.display="none";
        }
    }
}
setInterval(checkPositoin, 300);
