// Exercicios sobre funções

function decrementaNumero(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(`O número ${i} é par`);
    }
  }
}

decrementaNumero(10);
