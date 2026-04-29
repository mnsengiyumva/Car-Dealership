

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

const searchBtn = document.querySelector("#searchButton")
const searchCt = document.querySelector("#searchContent")

searchBtn.addEventListener("click", function(){

    searchCt.classList.toggle("hideSearch")

})

document.addEventListener("click", function(event){

    if(!searchBtn.contains(event.target) && !searchCt.contains(event.target)){
        searchCt.classList.add("hideSearch")
    }
})
    


const vihecleBtn = document.querySelector("#vihecleBtn");
const vihecleButton = document.querySelector("#vihecleContent");

vihecleBtn.addEventListener("click", function(){
    vihecleButton.classList.toggle("hide")
});

document.addEventListener("click", function(event){
    if(!vihecleButton.contains(event.target) && !vihecleBtn.contains(event.target)){
        vihecleButton.classList.add("hide")
    }
})



const toggleBtn = document.querySelector("#darkToggle")
const body = document.querySelector("body")

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark")
})


const buildbtn = document.querySelector("#buildBtn")
const buildCnt = document.querySelector("#buildContent")

buildbtn.addEventListener("click", function(){
    buildCnt.classList.toggle("hideBuild")
})

document.addEventListener("click", function(event){
    if(!buildbtn.contains(event.target) && !buildCnt.contains(event.target)){
        buildCnt.classList.add("hideBuild")
    }
})

const dealersbtn = document.querySelector("#dealersBtn")
const dealersCnt = document.querySelector("#dealersContent")

dealersbtn.addEventListener("click", function(){
    dealersCnt.classList.toggle("hideDealers")
})

document.addEventListener("click", function(event){
    if(!dealersbtn.contains(event.target) && !dealersCnt.contains(event.target)){
        dealersCnt.classList.add("hideDealers")
    }
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

const userbtn = document.querySelector("#userBtn")
const userCt = document.querySelector("#userContent")

userbtn.addEventListener("click", function(){
    userCt.classList.toggle("hideUser")
})

document.addEventListener("click", function(event){

    if(!userbtn.contains(event.target) && !userCt.contains(event.target)){
        userCt.classList.add("hideUser")
    }

})

const dotsbtn = document.querySelector("#dotsBtn")
const dotsCt = document.querySelector("#dotsContent")

dotsbtn.addEventListener("click", function(){
    dotsCt.classList.toggle("hideDots")
})

document.addEventListener("click", function(event){
   if(!dotsbtn.contains(event.target) && !dotsCt.contains(event.target)){
        dotsCt.classList.add("hideDots")
    }
})

const cars = document.querySelector(".shopCar");

const itemsPerPage = 5;

let currentPage = 1;

function showPage(page){
    let start = (page-1)*itemsPerPage
    let end = start+itemsPerPage;

    cars.forEach((cars, index )=> {

        if(index >= start && index<end ){

            createDecipheriv.style.display = "block";

        } else{
            createDecipheriv.style.display = "none";
        }
        
    });

    document.getElementById("pageNum").innerHTML = "Page "+page
}

function nextPage(){

    let totalPages = Math.ceil(cars.length/itemsPerPage);

    if(currentPage < totalPages){
        currentPage ++;
        showPage(currentPage);
    }
}



const findEv = document.querySelector("#ev-button")
const findEvCt = document.querySelector("#ev-content")
findEv.addEventListener("click", function(){

    findEvCt.classList.toggle("hide-ev");
    
})

document.addEventListener("click", function(event){

    if(!findEv.contains(event.target) && !findEvCt.contains(event.target)){

        findEvCt.classList.add("hide-ev")
    }
})

const findDark = document.querySelector("#dark-button");
const findDkCt = document.querySelector("#dark-content")

findDark.addEventListener("click", function(){

    findDkCt.classList.toggle("hide-dark")
})

document.addEventListener("click", function(event){
    if(!findDark.contains(event.target) && !findDkCt.contains(event.target)){
        findDkCt.classList.add("hide-dark")
    }
})

const evBtn = document.querySelector("#evButton");
const evCt = document.querySelector("#evContent");

evBtn.addEventListener("click", function(){
    evCt.classList.toggle("hideEv")
})

document.addEventListener("click", function(event){
    if(!evBtn.contains(event.target) && !evCt.contains(event.target)){
        evCt.classList.add("hideEv")
    }
})

const hybridBtn = document.querySelector("#hybridButton");
const hybrintCt = document.querySelector("#hybridContent");

hybridBtn.addEventListener("click", function(){
    hybrintCt.classList.toggle("hideHybrid")
})

document.addEventListener("click", function(event){

    if(!hybridBtn.contains(event.target) && !hybrintCt.contains(event.target)){

        hybrintCt.classList.add("hideHybrid")
    }
})

const suvBtn = document.querySelector("#suvButton")
const suvCt = document.querySelector("#suvContent")

suvBtn.addEventListener("click", function(){
    suvCt.classList.toggle("hideSuv")
})

document.addEventListener("click", function(event){
    if(!suvBtn.contains(event.target) && !suvCt.contains(event.target)){
        suvCt.classList.add("hideSuv")
    }
})

//Pagination





