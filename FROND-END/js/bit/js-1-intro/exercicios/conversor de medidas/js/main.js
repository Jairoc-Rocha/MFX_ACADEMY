let medida = parseFloat(prompt("Insira uma medida em metros:"));
let unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1. milímetro  (mm)" +
    "\n2. centímetro (cm)" +
    "\n3. decímetro  (dm)" +
    "\n4. decâmetro  (dam)" +
    "\n5. hectômetro (hm)" +
    "\n6. quilômetro (km)"
);

let conversor = 0;

switch (unidade) {
  case "1":
    conversor = medida * 1000;
    alert("Resultado: " + medida + "m = " + conversor + "mm");
    break;
  case "2":
    conversor = medida * 100;
    alert("Resultado: " + medida + "m = " + conversor + "cm");
    break;
  case "3":
    conversor = medida * 10;
    alert("Resultado: " + medida + "m = " + conversor + "dm");
    break;
  case "4":
    conversor = medida * 0.1;
    alert("Resultado: " + medida + "m = " + conversor + "dam");
    break;
  case "5":
    conversor = medida * 0.01;
    alert("Resultado: " + medida + "m = " + conversor + "hm");
    break;
  case "6":
    conversor = medida * 0.001;
    alert("Resultado: " + medida + "m = " + conversor + "km");
    break;
  default:
    alert("Opção inválida");
}
