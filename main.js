
var menu = document.getElementById("m1");
var menubtn = document.getElementById("menu");

menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        console.log("Button clicked");
    } else {
        menu.style.display = 'none';
        console.log("Div is hidden");
    }
}

var abt = document.getElementById("abt")
abt.addEventListener('click',goToAbout)

function goToAbout()
{
    window.location.hash ="#navtoabt"
}

var proj = document.getElementById("proj")
proj.addEventListener('click',gotoProject)

function gotoProject()
{
    window.location.hash ="#gotoproject"
}

var contact = document.getElementById("cnt")
contact.addEventListener('click',goTocontact)

function goTocontact()
{
    window.location.hash ="#gotoContact"
}

var abtbtn = document.getElementById("about")
abtbtn.addEventListener('click',goToAbout)

var projbtn = document.getElementById("proj-button")
projbtn.addEventListener('click',gotoProject)

var project = document.getElementById("proj1")
project.addEventListener('click', redirectToWeb)

function redirectToWeb()
{
    window.open("https://masheera.github.io/Modest_essential/","_blank")
}