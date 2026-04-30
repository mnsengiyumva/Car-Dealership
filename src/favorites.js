let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const box = document.getElementById("favoriteCars");

if(favorites.length === 0){
    box.innerHTML = "<h2> No Favorite cars yet. </h2>";
} else{
    favorites.forEach(car => {
        box.innerHTML += `<div class = "fav-card">
                            <h2> ${car} </h2>
                        </div>
                        `;
    });
    
}

function removeFav(id){

    favorites = favorites.filter(item => item !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    localStorage.reload();

}