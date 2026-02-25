const menubtn = document.querySelector("#menubtn");
const menuContent = document.querySelector("#menuContent");

menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("hidden");
    
});

const vihecleBtn = document.querySelector("#vihecleBtn");
const vihecleButton = document.querySelector("#vihecleButton");

vihecleBtn.addEventListener("click", function(){
    vihecleButton.classList.toggle("hide")
});

const openBtn = document.querySelector("#openModal")
const closeBtn = document.querySelector("#closeModal")

openBtn.addEventListener("click", function(){
    modal.classList.remove("hidden")
})

closeBtn.addEventListener("click", function(){
    modal.classList.add("hidden")
})

const more = document.querySelector("#moreBtn")
const moreCnt = document.querySelector("#moreContent")

moreCnt.addEventListener("click", function(){
    moreCnt.classList("hideMore")
})