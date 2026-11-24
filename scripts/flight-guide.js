const tipButton = document.querySelector("#tip-btn");
const statusText = document.querySelector("#status-text");
const yearSpan = document.querySelector("#year");

function showTip() {
    statusText.textContent = "An altimeter estimates altitude by measuring atmospheric pressure.";
}

tipButton.addEventListener("click", showTip);

yearSpan.textContent = new Date().getFullYear();
