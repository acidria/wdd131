const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  navigation.classList.toggle("show");

  if (navigation.classList.contains("show")) {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation menu");
    menuIcon.textContent = "×";
  } else {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.textContent = "☰";
  }
}

function displayFooterDates() {
  const currentDate = new Date();
  document.querySelector("#current-year").textContent = currentDate.getFullYear();
  document.querySelector("#last-modified").textContent = document.lastModified;
}

menuButton.addEventListener("click", toggleMenu);
displayFooterDates();
