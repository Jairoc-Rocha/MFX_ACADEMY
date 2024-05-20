let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
};

console.log(onibus);

onibus.janelas = 20;
console.log(onibus);

delete onibus.rodas;
console.log(onibus);

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);
