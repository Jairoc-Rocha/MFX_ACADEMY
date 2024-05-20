// JSON.stringify - converte um JSON em uma string
// JSON.parse - converte uma string em um JSON

let pessoa = {
  nome: "Matheus",
  idade: 28,
  profissao: "Programador",
  hobbies: ["Video game", "Leitura", "Correr"],
};

console.log(pessoa);

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies);
