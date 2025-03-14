const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")}; {
    navMenu.classList.toggle("active");});







