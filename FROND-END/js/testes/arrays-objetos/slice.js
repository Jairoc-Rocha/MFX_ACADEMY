// O método slice() retorna um array a partir de outro array
// O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array -1
// Se omitir o ultimo parâmetro ele retorna o índice retornado até o final do array.

let frutas = [
  "uva",
  "abacaxi",
  "melão",
  "banana",
  "abacate",
  "melancia",
  "caju",
  "manga",
];

console.log(frutas.slice(2, 6));
console.log(frutas.slice(3));
