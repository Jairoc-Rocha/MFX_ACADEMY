// 1. Criar função para pegar os valores do campo;
function realizaTransacao() {
  const tipoTransacao = document.querySelector("#sl_tipo_transacao").value;
  const descricao = document.querySelector("#txt_descricao").value;
  const valor = document.querySelector("#txt_valor").valueAsNumber;

  if (tipoTransacao != "" && descricao != "" && valor > 0) {
    const novoValorTotal = calculaTransacao(tipoTransacao, valor);

    document.querySelector("#valor_total").textContent = novoValorTotal;

    let icone;
    const dataAtual = new Date().toLocaleString();

    if (tipoTransacao === "entrada") {
      icone = `<i class="bi bi-arrow-up-circle"></i>`;
    } else {
      icone = `<i class="bi bi-arrow-down-circle"></i>`;
    }

    const html = montarListaTransacao(icone, descricao, valor, dataAtual);

    document.querySelector("#lista_transacoes").innerHTML += html;
  } else {
    alert("Preencha todos os dados!");
  }
}

// 2. Criar função para realizar o cálculo;
function calculaTransacao(tipoTransacao, valor) {
  const valorTotal = Number(document.querySelector("#valor_total").textContent);

  let valorFinal;
  if (tipoTransacao == "entrada") {
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

function montarListaTransacao(icone, descricao, valor, data) {
  const html = `
      <div class="registro">
          <div class="linha">
            <span>
              ${icone}
            </span>
              </div>
                <div class="linha">
                <span>
                    ${descricao}
                </span>
              </div>
            <div class="linha">
                <span>
                    ${valor}
                </span>
            </div>

            <div class="linha">
                <span>
                    ${data}
                </span>
            </div>

                </div>
  `;

  return html;
}
