const togglebtn = document.querySelector("#darkToggle")
const body  = document.querySelector("body");
togglebtn,addEventListener("click", function(){
    body.classList.toggle("dark");
});