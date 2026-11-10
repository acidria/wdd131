const temperatureC = 8;
const windSpeedKmh = 10;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

function displayPageDetails() {
  const currentYear = document.querySelector("#current-year");
  const lastModified = document.querySelector("#last-modified");
  const windChill = document.querySelector("#wind-chill");

  currentYear.textContent = new Date().getFullYear();
  lastModified.dateTime = new Date(document.lastModified).toISOString();
  lastModified.textContent = document.lastModified;

  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    windChill.textContent = `${calculateWindChill(temperatureC, windSpeedKmh).toFixed(1)} °C`;
  } else {
    windChill.textContent = "N/A";
  }
}

displayPageDetails();
