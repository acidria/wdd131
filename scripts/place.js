const temperature = 8;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

if (temperature <= 10 && windSpeed > 4.8) {
  document.querySelector("#wind-chill").textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} else {
  document.querySelector("#wind-chill").textContent = "N/A";
}
