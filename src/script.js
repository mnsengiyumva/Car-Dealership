const menubtn = document.querySelector("#menubtn");
const menuContent = document.querySelector("#menuContent");

menubtn.addEventListener("click", function(){
    menuContent.classList.toggle("hidden");
    
});

document.addEventListener("click", function(event){
    if(!menuContent.contains(event.target) && !menubtn.contains(event.target)){

        menuContent.classList.add("hidden")

    }
})

const vihecleBtn = document.querySelector("#vihecleBtn");
const vihecleButton = document.querySelector("#vihecleButton");

vihecleBtn.addEventListener("click", function(){
    vihecleButton.classList.toggle("hide")
});

document.addEventListener("click", function(event){
    if(!vihecleButton.contains(event.target) && !vihecleBtn.contains(event.target)){
        vihecleButton.classList.add("hide")
    }
})

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

more.addEventListener("click", function(){
    moreCnt.classList.toggle("hideMore")
})

document.addEventListener("click", function(event){
    if(!more.contains(event.target) && !moreCnt.contains(event.target)){
        moreCnt.classList.add("hideMore")
    }
})

const toggleBtn = document.querySelector("#darkToggle")
const body = document.querySelector("body")

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark")
})

const menBt = document.querySelector("#menBtn")
const menContent = document.querySelector("#menContent")

menBt.addEventListener("click", function(){
    menContent.classList.toggle("hid")
})

document.addEventListener("click", function(event){

    if(!menContent.contains(event.target) && !menBt.contains(event.target)){
        menContent.classList.add("hid")
    }
    
})

const buildbtn = document.querySelector("#buildBtn")
const buildCnt = document.querySelector("#buildContent")

buildbtn.addEventListener("click", function(){
    buildCnt.classList.toggle("hideBuild")
})