

let selectPopulate = document.querySelector('productSelect');


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

products.forEach((product) => {
    let option = document.createElement("option");
    option.text = product.name;
    option.value = product.id;

    option.setAttribute('data-rating', product.averagerating);
    selectPopulate.appendChild("option");
});

selectPopulate.onchange = function(){
   const selectedOption = selectPopulate.options[selectPopulate.selectedIndex];
   const selectedRating = selectedOption.getAttribute('data-rating');
   const selectedId = selectedOption.value;
   const selectedName = selectedOption.text;

   console.log(`Selected: ${selectedName}, ID: ${selectedId}, Rating: ${selectedRating}`);
};

selectPopulate();



let numReviews = parseInt(localStorage.getItem("numReviews-ls")) || 0;
const reviewDisplay = document.querySelector(".clicks");
const reviewForm = document.getElementById("reviewForm");


reviewDisplay.addEventListener("click", () => {
reviewDisplay.textContent = numReviews})


function updateDisplay() {
    if (numReviews !== 0) {
        reviewDisplay.textContent = numReviews;
    } else {
        reviewDisplay.textContent = "You're the FIRST Review!";
    }
}

updateDisplay();

reviewDisplay.addEventListener("submit", () => {
    numReviews++; 
    const reviewInput = document.getElementById("reviewInput").value;
})


 localStorage.setItem("numReviews-ls");
updateDisplay();


