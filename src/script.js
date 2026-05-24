

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


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slideshow .sliding");
    const prevBtn = document.querySelector(".slideshow .prev");
    const nextBtn = document.querySelector(".slideshow .next");
    let currentIndex = 0;

    // Helper function to update classes
    function showSlide(index) {
        // Remove active class from the current slide
        slides[currentIndex].classList.remove("active");
        
        // Update index to the new slide
        currentIndex = index;
        
        // Add active class to the new slide
        slides[currentIndex].classList.add("active");
    }

    // Next Button Click
    nextBtn.addEventListener("click", () => {
        // If we're at the end, loop back to 0. Otherwise, go to next.
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    });

    // Prev Button Click
    prevBtn.addEventListener("click", () => {
        // If we're at the beginning, loop to the last slide. Otherwise, go back one.
        let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    });
});




const evBtn = document.querySelector("#evButton");
const evCt = document.querySelector("#evCont");

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





const cars = document.querySelectorAll(".shopCar");

const itemsPerPage = 5;

let currentPage = 1;


function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    cars.forEach((car, index) => {
        if (index >= start && index < end) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });

    let totalPages = Math.ceil(cars.length / itemsPerPage);

    // FIX 1: Safety check for pageNum element
    const pageNumElem = document.getElementById("pageNum");
    if (pageNumElem) {
        pageNumElem.innerText = "Page " + page;
    }

    // FIX 2: Fixed the typo 'querySelectorById' to 'getElementById' + added safety checks
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}


document.getElementById("nextBtn").addEventListener("click", () => {
    let totalPages = Math.ceil(cars.length / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});


showPage(currentPage)

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


document.addEventListener('DOMContentLoaded', () => {
  const heartBtns = document.querySelectorAll('.heart-btn');
  const favouritesGrid = document.getElementById('favourites-grid');
  const favouritesEmpty = document.getElementById('favourites-empty');

  let favourites = JSON.parse(localStorage.getItem('favouriteCars')) || [];

  // Build car data from existing cards
  function getCarData() {
    const cars = {};
    document.querySelectorAll('.shopCar').forEach(card => {
      const id = card.querySelector('.heart-btn').dataset.id;
      const img = card.querySelector('img').src;
      const prices = card.querySelectorAll('.shopDetails p');
      const price = prices[1] ? prices[1].textContent : '';
      const memberPrice = prices[2] ? prices[2].textContent : '';
      cars[id] = { img, price, memberPrice };
    });
    return cars;
  }

  function renderFavourites() {
    const cars = getCarData();
    console.log('Cars found:', cars);        // ← add this
    console.log('Favourites list:', favourites); 
    favouritesGrid.innerHTML = '';

    if (favourites.length === 0) {
      favouritesEmpty.style.display = 'block';
      return;
    }

    favouritesEmpty.style.display = 'none';

    favourites.forEach(id => {
      const car = cars[id];
      if (!car) return;

      const card = document.createElement('div');
      card.classList.add('fav-card');
      card.dataset.id = id;

      card.innerHTML = `
        <img src="${car.img}" alt="Favourite Car">
        <button class="fav-remove-btn" data-id="${id}" title="Remove">✕</button>
        <div class="fav-card-details">
          <p class="fav-price">${car.price}</p>
          <p>${car.memberPrice}</p>
        </div>
      `;

      // Remove button inside favourites card
      card.querySelector('.fav-remove-btn').addEventListener('click', () => {
        removeFavourite(id);
      });

      favouritesGrid.appendChild(card);
    });
  }

  function removeFavourite(id) {
    favourites = favourites.filter(f => f !== id);
    localStorage.setItem('favouriteCars', JSON.stringify(favourites));

    // Unlight the heart button on the car card
    const btn = document.querySelector(`.heart-btn[data-id="${id}"]`);
    if (btn) {
      btn.textContent = '♡';
      btn.classList.remove('liked');
    }

    renderFavourites();
  }

  // Set initial heart button states
  heartBtns.forEach(btn => {
    const id = btn.dataset.id;

    if (favourites.includes(id)) {
      btn.textContent = '♥';
      btn.classList.add('liked');
    }

    btn.addEventListener('click', () => {
      if (favourites.includes(id)) {
        removeFavourite(id);
      } else {
        favourites.push(id);
        btn.textContent = '♥';
        btn.classList.add('liked');
        localStorage.setItem('favouriteCars', JSON.stringify(favourites));
        renderFavourites();
      }
    });
  });

  // Initial render
  renderFavourites();
});