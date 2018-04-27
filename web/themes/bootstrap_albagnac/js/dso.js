var button_up = document.createElement("DIV");
button_up.id = "ok"
document.body.appendChild(button_up);

// creation svg //
var svg = "<svg width=\"50\" height=\"50\">";
svg+="<line x1=\"10\" y1=\"40\" x2=\"25\" y2=\"10\" style=\"stroke:rgb(255,255,255); stroke-width:2\"/>"
svg+="<line x1=\"25\" y1=\"10\" x2=\"40\" y2=\"40\" style=\"stroke:rgb(255,255,255); stroke-width:2\"/>"
svg+="</svg>"
button_up.innerHTML=(svg);


document.addEventListener("scroll",hideButton);
button_up.addEventListener("click",scrollTop);



function hideButton()
{
    console.log("hello ? ");
    if(pageYOffset == 0)
    {
        button_up.style.display = "none";
    }
    else{
        button_up.style.display = "block";

    }
}

function scrollTop()
{
    window.scrollTo(0,0);
}

 