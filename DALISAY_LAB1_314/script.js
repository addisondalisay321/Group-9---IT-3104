
const message = document.getElementById("message");
const changeMessageBtn = document.getElementById("changeMessageBtn");
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");

changeMessageBtn.addEventListener("click", function () {
    message.textContent = "Hello! We are Group 9!";
});

const backgroundColors = ["#bb1f1f"];

let colorIndex = 0;

changeBackgroundBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = backgroundColors[colorIndex];

    colorIndex = (colorIndex + 1) % backgroundColors.length;
});