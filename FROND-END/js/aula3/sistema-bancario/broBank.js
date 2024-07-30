let saldo = 1000;

function depositar(valorDepositado) {
  saldo = saldo + valorDepositado;
  console.log("Valor depositado: " + valorDepositado);
}

function sacar(valorSacado) {
  saldo = saldo - valorSacado;
  console.log("Valor sacado: " + valorSacado);
  if (saldo <= 0) {
    console.log("Saldo zerado ou negativo, não foi possível realizar o saque");
  } else {
    return saldo;
  }
}

function consultarSaldo() {
  console.log("Saldo atual: " + saldo);
}

consultarSaldo();
depositar(500);
consultarSaldo();
sacar(900);
consultarSaldo();
sacar(700);
consultarSaldo();
