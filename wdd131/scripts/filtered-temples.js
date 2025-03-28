const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let templePics = document.querySelector('#temples');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");         
})


const currentYear = new Date().getFullYear();
let year = document.getElementById("currentYear");
year.innerHTML = currentYear;
const modifiedYear = document.lastModified;
document.getElementById('lastModified').innerText = modifiedYear;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated:"17 May 1888",
        area: 5657,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Pocatello Idaho Temple",
        location: "Pocatello, Idaho ",
        dedicated: " 16 March 2019",
        area: 4989,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-main.jpg"
    },
    {
        templeName: "London England Temple",
        location: "London, England",
        dedicated:"10 August 1953",
        area: 196,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
    },
];

makeTempleCard(temples);

oldLink.addEventListener ("click", () => {
    let old = temples.filter(temples => temples.dedication <= 1900);
    
});


newLink.addEventListener ("click", () => {
    let newLinks = temples.filter(temples => temples.dedication > 2000);
    
});

largeLink.addEventListener ("click", () => {
    let large = temples.filter(temples => temples.area > 9000);
    
});

smallLink.addEventListener ("click", () => {
    let small = temples.filter(temples => temples.area < 1000);
    
});


function makeTempleCard(filteredTemples) {
    document.querySelector (".container").innerHTML= "";
   filteredTemples.forEach(temple => {
     let card = document.createElement(`section`);
     let name = document.createElement(`h3`);
     let location = document.createElement(`p`);
     let dedication = document.createElement(`p`);
     let area = document.createElement(`p`)
     let img = document.createElement(`img`)
     
     name.textContent = temple.templeName;
     location.innerHTML = `<span class = "label">Location:<span> ${temple.location}`;
     dedication.innerHTML = `<span class = "label">Dedicated:<span> ${temple.dedicated}`;
     area.innerHTML = `<span class = "label">Size:<span> ${temple.area} sq ft`;
     img.setAttribute("src", temple.imageUrl);
     img.setAttribute("alt", `${temple.templeName} temple`);
     img.setAttribute("loading", "lazy");

     card.appendChild(name);
     card.appendChild(location);
     card.appendChild(dedication);
     card.appendChild(area);
     card.appendChild(img);

     document.querySelector(".container").appendChild(card);

});
}
  
