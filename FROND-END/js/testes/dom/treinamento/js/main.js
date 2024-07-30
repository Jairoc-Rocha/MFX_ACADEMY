// Seleção de elementos externos
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

// funções
function calcular() {
  // Seleção de elementos internos
  const n1 = document.querySelector("#n1").valueAsNumber;
  const n2 = document.querySelector("#n2").valueAsNumber;
  const r = document.querySelector("#r");

  const resultado = n1 + n2;
  if (isNaN(resultado)) {
    r.textContent = "";
  } else {
    r.textContent = resultado;
  }
}

// eventos

// utilizando css dinamicamente
h1.classList.add("h1");
h2.classList.add("h2");
h2.classList.remove("h2");
h2.style.backgroundColor = "#333";
h2.style.color = "#fff";

// Criando elementos dinamicamente
const h6 = document.createElement("h6");
h6.textContent = "O elemento (h6) fo criado dinamicamete";
h1.appendChild(h6);
