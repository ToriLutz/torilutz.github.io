
//hamburger menu
function toggle(){
    const toggle = document.querySelector('.toggle')
    const banner = document.querySelector('.banner')
    toggle.classList.toggle('active')
    banner.classList.toggle('active')
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");         
})


//my product shop cards
const products = [
    {
        image:"https://64.media.tumblr.com/bc40c4903cc3bc65465ab6f9ccdda11e/5d842d597c654f27-6c/s250x400/647a0196039d63fe6858b400d5bc1b590d79c20c.png",
        description: "A print of a man performing magic in front of a mechanical foc",
        categoryText: "Large Print",
        rating: "⭐⭐⭐⭐⭐",
        price: 25,
    },
    {
        image:"https://64.media.tumblr.com/c07fdb5dd5ea4ef375450b3ab1e3bd7c/2f274cf9f8d56672-ce/s250x400/13b4616db59aa1ebf6922effd5a3fc9827e9b225.png",
        description: "A print of a selkie enjoying a nap underwater",
        categoryText: "Large Print",
        rating: "⭐⭐⭐⭐",
        price: 30,
    },
    {
        image:"https://64.media.tumblr.com/5641994648c1fd7fa8f352d7c693e192/00a57bfa125b5504-ff/s640x960/6f631cb84a47a5c070a13dd7355b78e4a2d94d5d.png",
        description: "A print of a man with a flower in his mouth",
        categoryText: "Small Print",
        rating: "⭐⭐⭐",
        price: 10,
    },
    {
        image:"https://64.media.tumblr.com/d85f9af51973fbaaa695a5a1b115864e/39e20102b48da0a6-6d/s250x400/0e529c70c30066c522e95458292a4f59a99fac9f.png",
        description: "A print of a dragon halfling chewing a coin",
        categoryText: "Small Print",
        rating: "⭐⭐⭐⭐⭐",
        price: 25,
    }


]



// this is supposed to make the cards and append them to the DOM
function makeProductCard(products) {
   
  let parentContainer = document.getElementById("cardContainer");

    products.forEach(product => {
        
        let container = document.createElement(`section`);
        let image = document.createElement(`img`);
        let description = document.createElement(`p`);
        let categoryText = document.createElement(`p`);
        let rating = document.createElement(`p`);
        let price = document.createElement(`p`);
        image.setAttribute("src", product.image);
        image.setAttribute("alt", `${product.description}`);
        image.setAttribute("loading", "lazy");
        description.textContent = `${product.description}`;
        categoryText.textContent = `${product.categoryText}`;
        rating.textContent = `${product.rating}`;
        price.textContent =`$${product.price}`;

        container.appendChild(image);
        container.appendChild(description);
        container.appendChild(categoryText);
        container.appendChild(rating);
        container.appendChild(price);

        // to make sure the cards are properly generating
        console.log ('container', container); 
    // this is supposed to make it display cause return isn't doing anything either
  parentContainer.appendChild(container)
})}



document.addEventListener("DOMContentLoaded", () => {
    makeProductCard(products);
});

//for the contact page 
let reasonPopulate = document.getElementById('reasonSelect');

if (reasonPopulate){

  const choices = [
      
    {
        reason: "Contacting You For Commission"
    },
    {
      reason: "reporting a site bug"
    },
    {
      reason: "Looking for a refund"
    },
    {
      reason: "I have a video idea!"
    }
  ];
  
  choices.forEach((choice) => {
      let option = document.createElement("option");
      option.text = choice.reason;

      reasonPopulate.appendChild(option);
  });
  
  reasonPopulate.onchange = function(){
     const selectedOption = reasonPopulate.options[reasonPopulate.selectedIndex];
     const selectedName = selectedOption.text;
  
     console.log(`${selectedName}`);
  };


}




