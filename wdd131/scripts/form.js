

let selectPopulate = document.querySelector('select');


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
    let o = document.createElement("option");
    o.text = product.id;
    o.text = product.name;
    o.value = product.averagerating;
    slctDropDown.appendChild(o);
});

slctDropDown.onchange = function(){
    result.innerText = slctDropDown.value+"name"+"id"
};

let numReviews = parseInt(localStorage.getItem("numReviews-ls")) || 0;
const reviewDisplay = document.querySelector(".clicks");


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

reviewDisplay.addEventListener("click", () => {
    numReviews++; 
    localStorage.setItem("numReviews-ls", numReviews);
})

updateDisplay();


