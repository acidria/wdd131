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
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, May, 21",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-icon");
const templeGrid = document.querySelector("#temple-grid");
const filterStatus = document.querySelector("#filter-status");
const filterLinks = navigation.querySelectorAll("[data-filter]");

function getTempleYear(temple) {
  return Number(temple.dedicated.slice(0, 4));
}

function formatDedicatedDate(dedicated) {
  const [year, month, day] = dedicated.split(", ");
  return `${month} ${Number(day)}, ${year}`;
}

function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.className = "temple-card";

  const image = document.createElement("img");
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.width = 400;
  image.height = 250;
  image.loading = "lazy";

  const caption = document.createElement("figcaption");
  const name = document.createElement("h2");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;

  const dedication = document.createElement("p");
  dedication.textContent = `Dedicated: ${formatDedicatedDate(temple.dedicated)}`;

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area.toLocaleString()} square feet`;

  caption.append(name, location, dedication, area);
  card.append(image, caption);
  return card;
}

function getFilteredTemples(filter) {
  switch (filter) {
    case "old":
      return temples.filter((temple) => getTempleYear(temple) < 1900);
    case "new":
      return temples.filter((temple) => getTempleYear(temple) > 2000);
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    default:
      return temples;
  }
}

function displayTemples(filter = "home") {
  const filteredTemples = getFilteredTemples(filter);
  templeGrid.replaceChildren(...filteredTemples.map(createTempleCard));
  filterStatus.textContent = `Showing ${filteredTemples.length} ${filteredTemples.length === 1 ? "temple" : "temples"}.`;

  filterLinks.forEach((link) => {
    if (link.dataset.filter === filter) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function toggleMenu() {
  const isOpen = navigation.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuIcon.textContent = isOpen ? "×" : "☰";
}

function displayFooterDates() {
  const currentDate = new Date();
  document.querySelector("#current-year").textContent = currentDate.getFullYear();
  document.querySelector("#last-modified").textContent = document.lastModified;
}

menuButton.addEventListener("click", toggleMenu);
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("[data-filter]");
  if (!link) return;

  event.preventDefault();
  displayTemples(link.dataset.filter);

  if (navigation.classList.contains("show")) {
    toggleMenu();
  }
});

displayTemples();
displayFooterDates();
