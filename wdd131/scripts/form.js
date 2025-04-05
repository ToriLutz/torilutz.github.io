

let selectPopulate = document.getElementById('productSelect');

if (selectPopulate){

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
      selectPopulate.appendChild(option);
  });
  
  selectPopulate.onchange = function(){
     const selectedOption = selectPopulate.options[selectPopulate.selectedIndex];
     const selectedRating = selectedOption.getAttribute('data-rating');
     const selectedId = selectedOption.value;
     const selectedName = selectedOption.text;
  
     console.log(`Selected: ${selectedName}, ID: ${selectedId}, Rating: ${selectedRating}`);
  };


}




document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const reviewInput = document.getElementById("review");
   const clickSpan = document.querySelector(".clicks");

 if (reviewForm){
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const reviewText = reviewInput.value.trim();

    if (reviewText){
      let numReviews = parseInt(localStorage.getItem("numReviews-ls")) || 0;
      numReviews ++;
      localStorage.setItem("numReviews-ls", numReviews);

      window.location.href = "review.html";
    } else {
      alert("please enter a review. ");
    }
    
    }

  
  )};
})

if (clickSpan){

  const reviews = parseInt(JSON.parse(localStorage.getItem("numReviews-ls")) , 10);
  clickSpan.innerHTML = reviews;

}
