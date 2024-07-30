const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const nome = document.querySelector("#name");
const btn = document.querySelector("#btn");
const h2 = document.querySelector("h2");
const form = document.querySelector("form");

const imcCalc = () => {
  let imc = +peso.value / (+altura.value * +altura.value);
  let usuario = nome.value;

  if (imc < 16.9) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta muito abaixo do peso`;
  } else if (imc < 18.4) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta abaixo do peso`;
  } else if (imc < 24.9) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta com peso normal`;
  } else if (imc < 29.9) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta acima do peso`;
  } else if (imc < 34.9) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta com obsidade grau I`;
  } else if (imc < 40) {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta com obsidade grau II`;
  } else {
    h2.textContent = `${usuario}, seu IMC é:  ${imc.toFixed(
      1
    )} você esta com obsidade grau III`;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nome.focus();
});

btn.addEventListener("click", imcCalc);
