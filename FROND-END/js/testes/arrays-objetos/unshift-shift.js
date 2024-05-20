// o método unshift() - serve para inserir um ou mais elementos no inicio do array
// O métdo shift() - server para remover um elemento no inicio do array

let carros = ["BMW", "Audi", "VW", "Fiat"];

let removePrimeiroItem = carros.shift();
console.log(removePrimeiroItem);
console.log(carros);

carros.unshift("Gurgel");
console.log(carros);
