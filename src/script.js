
const link = document.querySelector(".last");

link.addEventListener("click", function(){
    alert("You clicked the link");
})

const lin = document.querySelector("");
lin.addEventListener("click", function(){
    alert("Clicked");
})

document.getElementById("about a").addEventListener("click", function(){
    document.getElementById("extractContent").classList.toggle("show");
})

document.getElementById("myForm").addEventListener("submit", function(event){
    const name = document.getElementById("name").value;

    if(name == ""){
        alert("Name is required");
        event.preventDefault();
    }
})