// O operador rest operator - é uma forma de uma função receber indefinidos parâmetros
// O perador rest vai virar um array
// O parâmetro é defido por: ... + nome do parâmetro

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(2, 14, 50, 200);
console.log("pause");
imprimirNumeros(10, 51, 2, 36, 5, 45);
console.log("pause");
imprimirNumeros(55, 89);
