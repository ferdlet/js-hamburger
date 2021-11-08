const hamburgerButton = document.querySelector(".header-right > a");

hamburgerButton.addEventListener("click", function (){
    document.querySelector(".hamburger-menu").classList.add("active")
});

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", function (){
    document.querySelector(".hamburger-menu").classList.remove("active")
});