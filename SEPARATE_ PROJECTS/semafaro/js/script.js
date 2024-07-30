const redButton = document.querySelector("#red");
const yellowButton = document.querySelector("#yellow");
const greenButton = document.querySelector("#green");
const automaticButton = document.querySelector("#automatic");
const light = document.querySelector("#light");

function redLight() {
  light.src = "./img/vermelho.png";
}

function yellowLight() {
  light.src = "./img/amarelo.png";
}

function greenLight() {
  light.src = "./img/verde.png";
}

function automaticRedLight() {
  light.src = "./img/vermelho.png";
}

function automaticYellowLight() {
  light.src = "./img/amarelo.png";
}

function automaticGreenLight() {
  light.src = "./img/verde.png";
}

setInterval(automaticRedLight, 1000);
setInterval(automaticYellowLight, 2000);
setInterval(automaticGreenLight, 3000);

redButton.addEventListener("click", redLight);
yellowButton.addEventListener("click", yellowLight);
greenButton.addEventListener("click", greenLight);
automaticButton.addEventListener("click", automaticRedLight);
automaticButton.addEventListener("click", automaticYellowLight);
automaticButton.addEventListener("click", automaticGreenLight);
