const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");         
})


const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;
document.getElementById('lastModified').innerText = modifiedYear;





