// let cachorro = {
//   patas: 4,
//   nome: "Shark",
//   latir: function () {
//     console.log("Au Au");
//   },
// };

// console.log(cachorro.patas);
// console.log(cachorro.nome);
// cachorro.latir();

// adicionar e deletar propriedades
// let carro = {
//   marca: "VW",
//   portas: 4,
//   eletrico: false,
//   motor: 1.0,
// };

// carro.cor = "azul";

// delete carro.marca;

// console.log(carro.portas);
// console.log(carro.cor);
// console.log(carro);

// unir objetos

let carro = {
  portas: 4,
  portamalas: "200l",
  motor: "2.0",
};

let adicionais = {
  tetosolar: true,
  arcondicionado: true,
};

console.log(carro);
console.log("chave do objeto: " + " " + Object.keys(carro));
console.log("valor do objeto: " + " " + Object.values(carro));

Object.assign(carro, adicionais);

console.log(carro);
console.log(adicionais);
