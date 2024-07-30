let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let r = document.querySelector("#r");

function calcular() {
  let resultado = n1.valueAsNumber + n2.valueAsNumber;
  if (isNaN(resultado)) {
    r.textContent = "";
  } else {
    r.textContent = resultado;
  }
}

document.addEventListener("input", calcular);
