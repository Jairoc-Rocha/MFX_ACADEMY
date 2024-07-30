let nome = document.querySelector("#nome");

nome.value = "Jairo";

console.log(nome);

nome = "Arthur";

function saudacao() {
  console.log("Seja bem-vindo!!" + nome);
}

saudacao();
