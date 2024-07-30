// 1 - Criar a função para pegar os valords do campo
function realizaTransação() {
  const tipoTransacao = document.querySelector("#sl_tipo_transacao").value;
  const descricao = document.querySelector("#txt_descricao").value;
  const valor = document.querySelector("#txt_valor").valueAsNumber;

  if (tipoTransacao !== "" && descricao !== "" && valor > 0) {
    const novoValorTotal = calculaTransacao(tipoTransacao, valor);

    document.querySelector("#valor_total").textContent = novoValorTotal;
  } else {
    alert("Preencha todos os dados!");
  }
}

// 2 - Criar função para realziar o cálculo
function calculaTransacao(tipoTransacao, valor) {
  const valorTotal = Number(document.querySelector("#valor_total").textContent);

  let valorFinal;
  if (tipoTransacao === "entrada") {
    const entradaTotal = Number(
      document.querySelector("#valor_entrada").textContent
    );
    const novoValorTotalEntrada = valor + entradaTotal;

    document.querySelector("#valor_entrada").textContent =
      novoValorTotalEntrada;

    valorFinal = valor + valorTotal;
  } else {
    const saidaTotal = Number(
      document.querySelector("#valor_saida").textContent
    );
    const novoValorTotalSaida = valor + saidaTotal;

    document.querySelector("#valor_saida").textContent = novoValorTotalSaida;
    valorFinal = valorTotal - valor;
  }

  return valorFinal;
}
