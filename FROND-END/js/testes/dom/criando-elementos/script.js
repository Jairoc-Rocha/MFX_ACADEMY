let title = document.querySelector("#title");
let header = document.querySelector("#header");

// insertBefore cria um elemento antes de um outro elemento.
const p1 = document.createElement("p1");
p1.textContent = "Elemento (p1) foi criado pelo insertBefore antes do title";

header.insertBefore(p1, title);

// appendChild adiciona um elemento dentro do outro no final do elemento pai
const p2 = document.createElement("p");
p2.textContent =
  "Elemento (p2) foi adicionado pelo appendChild dentro do elemento (header)";

header.appendChild(p2);

// replaceChild é utilizado para trocar um elemento pelo outro
const h3 = document.createElement("h3");
h3.textContent =
  "Elemento (p2) foi substituido pelo elemento (h3) utilizando o replaceChild";

header.replaceChild(h3, p2);

// getAttribute pega o atributo do elemento
// setAttribute altera o atributo do elemento
let a = document.querySelector(".a");

a.getAttribute("href");
a.setAttribute("href", "https://ge.globo.com/");

// Utilizando o style dinamicamente
let h2 = document.querySelector(".h2");
h2.style.color = "red";

// Inserindo estilos dinamicamento com o classList.add
let section = document.querySelector("section");
let p3 = document.querySelector("#p3");

section.classList.add("noticias");
p3.classList.add("paragrafo");

// Removendo estilos dinamicamento com o classList.remove
p3.classList.remove("paragrafo");
