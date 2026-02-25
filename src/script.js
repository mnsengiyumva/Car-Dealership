const menubtn = document.querySelector("#menubtn");
const menuContent = document.querySelector("#menuContent");

menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("hidden");
    
})

const vihecleBtn = document.getElementById("#vihecleBtn");
const vihecleMenu = document.getElementById("#vihecleMenu");

vihecleMenu.addEventListener("click", function(){
    menuContent.classList.toggle("hidden")
})