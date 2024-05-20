// Verificar se o número é primo

let num = parseInt(
  prompt("Informe um número para verificar se é primo ou não")
);
let divisoes = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  alert(`O número ${num} é primo`);
} else {
  alert(`O número ${num} não é primo`);
}
