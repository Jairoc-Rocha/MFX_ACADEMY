function velocidade() {
  const nome1 = document.querySelector("#nome1").value;
  const nome2 = document.querySelector("#nome2").value;
  const velocidade1 = document.querySelector("#velocidade1").valueAsNumber;
  const velocidade2 = document.querySelector("#velocidade2").valueAsNumber;
  const resultado = document.querySelector("#resultado");

  if (velocidade1 > velocidade2) {
    resultado.innerHTML = `O primero carro <h3>${nome1}</h3>  é mais rápido que o segundo carro <h3>${nome2}</h3>`;
  } else if (velocidade2 > velocidade1) {
    resultado.innerHTML = `O segundo carro <h3>${nome2}</h3> é mais rápido que o primeiro carro <h3>${nome1}</h3>`;
  } else {
    resultado.innerHTML = " As velocidades são iguais";
  }
}

window.addEventListener("load", () => {
  nome1.focus();
});
