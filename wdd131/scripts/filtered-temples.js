const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let templePics = document.querySelector('#temples');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');
const homeLink = document.querySelector('#home');

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
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: "1888, May 17",
    area: 5657,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg",
  },
  {
    templeName: "Pocatello Idaho Temple",
    location: "Pocatello, Idaho ",
    dedicated: "2019, March 16",
    area: 4989,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/pocatello-idaho-temple/pocatello-idaho-temple-23276-main.jpg",
  },
  {
    templeName: "London England Temple",
    location: "London, England",
    dedicated: "1953, August 10",
    area: 42775,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg",
  },
];




function clearContainer() {
  document.querySelector(".container").innerHTML = "";
}

function displayTemples(templesArray) {
  const display = document.querySelector(".container");
  templesArray.forEach((temple) => {
    display.appendChild(makeTempleCard(temple));
  });
}

function initialTempleDisplay() {
  clearContainer();
  displayTemples(temples);
}


homeLink.addEventListener("click", () => {
  initialTempleDisplay();
});

oldLink.addEventListener("click", () => {
  let old = temples.filter((temple) => {
    const commaIndex = temple.dedicated.indexOf(",");
    const dedicated = temple.dedicated.substring(0, commaIndex);
    return Number(dedicated) < 1900;
  });
  console.log("old temples", old);
  clearContainer();
  displayTemples(old);
});

newLink.addEventListener("click", () => {
  let newLinks = temples.filter((temple) => {
    const commaIndex = temple.dedicated.indexOf(",");
    const dedicated = temple.dedicated.substring(0, commaIndex);
    return Number(dedicated) > 2000;
  });
  console.log("new temples", newLinks);
  clearContainer();
  displayTemples(newLinks);
});

largeLink.addEventListener("click", () => {
  let large = temples.filter((temples) => temples.area > 90000);
  console.log("large", large);
  clearContainer();
  displayTemples(large);
});

smallLink.addEventListener("click", () => {
  let small = temples.filter((temples) => temples.area < 10000);
  console.group("small temples");
  console.log(small);
  clearContainer();
  displayTemples(small);
});

function makeTempleCard(temple) {
  let card = document.createElement(`section`);
  let name = document.createElement(`h3`);
  let location = document.createElement(`p`);
  let dedication = document.createElement(`p`);
  let area = document.createElement(`p`);
  let img = document.createElement(`img`);

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

  return card;
}

initialTempleDisplay();