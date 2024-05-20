// O destructuring em objetos: desestrutura elementos de um objeto

const pessoa = {
  nome: "Jairo",
  sobreNome: "Rocha",
  idade: 42,
  profissão: "Desenvolvedor FullStack",
  filhos: 1,
};

const { nome, sobreNome, idade: minhaIdade, profissão, filhos } = pessoa;

console.log(nome);
console.log(minhaIdade, profissão, filhos);
