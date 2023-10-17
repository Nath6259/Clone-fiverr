const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closemenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click 
hamburgerBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

// Close mobile menu on close button click
closemenuBtn.addEventListener("click", () => {
    hamburgerBtn.click();
});