function soma() {
  let primeiroNumero = document.querySelector("#primeiroNumero").valueAsNumber;
  let segundoNumero = document.querySelector("#segundoNumero").valueAsNumber;

  let total = primeiroNumero + segundoNumero;

  document.querySelector("#resultado").innerText = "O resultado é : " + total;
  console.log(total);
}

soma();
