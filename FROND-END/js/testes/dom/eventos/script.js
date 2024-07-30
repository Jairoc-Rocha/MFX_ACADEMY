// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", () => {
  console.log("Clicou aqui!");
});

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

const imprimirMensagem = () => {
  console.log("Tem evento");
};
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title");
myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Evento 2");
});

// 5 removendo o comportamento padrão
const a = document.querySelector("a");
a.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Foi alterado o comportamento padrão");
});

// 6 - eventos do teclado
// keyup é ativado quando a tecla é solta
document.addEventListener("keyup", (event) => {
  console.log(`Soltou a tecla ${event.key}`);
});
// keydown é ativado quando a tecla pe pressionada
document.addEventListener("keydown", (event) => {
  console.log(`Apertou a tecla ${event.key}`);
});

// 7 - eventos do mouse
const mouseEvents = document.querySelector("#mouse");

// mousedown - é ativado quando pressiona o botão do mouse
mouseEvents.addEventListener("mousedown", () => {
  console.log("Evento mousedown");
});

// mouseup - é ativado quando solta o botão do mouse
mouseEvents.addEventListener("mouseup", () => {
  console.log("Evento mouseup");
});

// mouseover - é ativado quando passa o mouse em cima do objeto
mouseEvents.addEventListener("mouseover", () => {
  console.log("Evento mouseover");
});

// dblclick - é ativado quando dá o duplo clique no botão do mouse
mouseEvents.addEventListener("dblclick", () => {
  console.log("Evento dblclick");
});

// 8 - movimento do mouse
// mousemove - detecta a movimentação do mouse
// document.addEventListener("mousemove", (event) => {
//   console.log(`No eixo X: ${event.x}`);
//   console.log(`No eixo y: ${event.y}`);
// });

// 9 - evento de scroll do mouse/página
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px");
  }
});

// 10 - eventos por foco
const input = document.querySelector("#my-input");

// evento focus - é disparado quando focamos em um elemento
input.addEventListener("focus", () => {
  console.log("Entrou no input com o evento focus");
});

// envento blur - é disporado quando perde o foco em um elemento
input.addEventListener("blur", () => {
  console.log("Saiu do input com o evento blur");
});

// 11 - evento de carragamento
window.addEventListener("load", () => {
  console.log("Página carregada com sucesso!");
});
