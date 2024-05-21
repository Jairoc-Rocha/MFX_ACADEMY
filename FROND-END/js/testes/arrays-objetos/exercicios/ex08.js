let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log("Soma 10 + 5 = " + calculadora.somar(10, 5));
console.log("Subtrair 10 - 5 = " + calculadora.subtrair(10, 5));
console.log("Multiplicar 10 * 5 = " + calculadora.multiplicar(10, 5));
console.log("Dividir 10 / 5 = " + calculadora.dividir(10, 5));
