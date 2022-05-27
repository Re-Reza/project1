let forward = document.getElementById("goForward");
let back = document.getElementById("goBack");
let boxes = document.querySelectorAll(".box");
// console.log(boxes);
forward.addEventListener("click", goForward);
back.addEventListener("click", goBack);
let position=[];
for(let i=0; i<boxes.length; i++)
{
    position[i] = parseInt(window.getComputedStyle(boxes[i]).getPropertyValue("right"));
}

function goForward()
{
    if(position[0]<701)
    {
        for(let i=0; i<boxes.length; i++)
        {
            position[i] += 365;
            boxes[i].style.right = position[i]+"px";
        }
    }
    else
    {
        for(let i=0; i<boxes.length; i++)
        {
            position[i] = -392;
            boxes[i].style.right = position[i]+"px";
        }
    }
}

function goBack()
{
    if(position[0]>-393)
    {
        for(let i=0; i<boxes.length; i++)
        {
            position[i] -=365;
            boxes[i].style.right = position[i]+"px";
        }
    }
    else
    {
        for(let i=0; i<boxes.length; i++)
        {
            position[i] =338;
            boxes[i].style.right = position[i]+"px";
        }
    }
}