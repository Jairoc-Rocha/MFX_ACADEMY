let nome = "Arthur";
let nota1 = 7;
let nota2 = 5;
let nota3 = 10;
let nota4 = 3;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
  console.log(`O aluno: ${nome} foi aprovado com a média: ${media}`);
} else {
  console.log(`O aluno: ${nome} foi reprovado com a média: ${media}`);
}
