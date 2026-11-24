const tipButton = document.querySelector("#tip-btn");
const statusText = document.querySelector("#status-text");
const yearSpan = document.querySelector("#year");

const tips = [
    "An altimeter estimates altitude by measuring atmospheric pressure.",
    "QNH and standard pressure are different reference settings used in aviation.",
    "For real flight operations, follow official guidance and instruction from a qualified instructor."
];

let tipIndex = 0;

tipButton.addEventListener("click", function () {
    statusText.textContent = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
});

yearSpan.textContent = new Date().getFullYear();
