console.log("Le fichier DSO est fonctionnel");
var button_up = document.createElement("DIV");
button_up.id = "ok"
document.body.appendChild(button_up);

// creation svg //


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

 