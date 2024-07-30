const titulo = document.querySelector("#titulo");
const trabalho = document.querySelector(".trabalho");
const p = document.querySelector("p");

titulo.textContent = "Texto alterado com o (textContent)";
trabalho.innerHTML = ` Foi adicionando a tag (h5) <h5>Teste</h5>`;

const email = document.querySelector("#email").value;
const senha = document.querySelector("#senha").value;
const btn = document.querySelector("#btn");

function login() {
  let conteudo = `<p>E-mail: ${email}, senha: ${senha}</p>`;
  console.log(email);
  console.log(senha);
  return conteudo;
}

btn.addEventListener("click", login);

console.log(titulo);
console.log(trabalho);
console.log(p);

login();
