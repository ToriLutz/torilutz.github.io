const products = document.querySelector(".productHolder");

function makeCard([img, product, categoryText, rating, price, offer]){
    let code = `
      <div class="card">
                <img src="${img}" alt="a${product}" loading="lazy">
                <div class="cardText">
                    <p class="categoryText">${categoryText}</p>
                    <h5>${rating}</h5>
                    <p class="priceText">${price}</p>
                    <p class="offerText">${offer}</p>
                </div>
    `;
    products.innerHTML += code;
}

const cards = [
    {
        imageUrl:"https://64.media.tumblr.com/bc40c4903cc3bc65465ab6f9ccdda11e/5d842d597c654f27-6c/s250x400/647a0196039d63fe6858b400d5bc1b590d79c20c.pnj",
        product: "A print of a man performing magic in front of a mechanical foc",
        categoryText: "Large Print",
        rating: "⭐⭐⭐⭐⭐",
        price: 25,
        offer: "10% off"
    },
    {
        imageUrl:"https://64.media.tumblr.com/c07fdb5dd5ea4ef375450b3ab1e3bd7c/2f274cf9f8d56672-ce/s250x400/13b4616db59aa1ebf6922effd5a3fc9827e9b225.pnj",
        product: "A print of a selkie enjoying a nap underwater",
        categoryText: "Large Print",
        rating: "⭐⭐⭐⭐",
        price: 30,
        offer: "5% off"
    },
    {
        imageUrl:"https://64.media.tumblr.com/5641994648c1fd7fa8f352d7c693e192/00a57bfa125b5504-ff/s640x960/6f631cb84a47a5c070a13dd7355b78e4a2d94d5d.pnj",
        product: "A print of a man with a flower in his mouth",
        categoryText: "Small Print",
        rating: "⭐⭐⭐",
        price: 10,
        offer: "50% off"
    },
    {
        imageUrl:"https://64.media.tumblr.com/d85f9af51973fbaaa695a5a1b115864e/39e20102b48da0a6-6d/s250x400/0e529c70c30066c522e95458292a4f59a99fac9f.pnj",
        product: "A print of a dragon halfling chewing a coin",
        categoryText: "Small Print",
        rating: "⭐⭐⭐⭐⭐",
        price: 25,
        offer: "10% off"
    }
]

function clearContainer(){
    document.querySelector(".productHolder").innerHTML = "";
}

function displayCard(cardsArray){
    const display = document.querySelector(".productHolder");
    cardsArray.array.forEach((card) => {
        display.appendChild(makeCard([img, product, categoryText, rating, price, offer]));
    });
}

function initialCardDisplay(){
    clearContainer();
    displayCard(cards);
}

/*
function createCard(card){
    let img = document.createElement(`img`);
    let product = document.createElement(`p`);
    let categoryText = document.createElement(`h5`);
    let rating = document.createElement (`p`);
    let price = document.createElement(`p`);
    let offer = document.createElement(`p`);
}
*/