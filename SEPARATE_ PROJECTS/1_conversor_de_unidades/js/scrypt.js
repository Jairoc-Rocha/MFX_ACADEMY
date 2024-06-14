// Obtendo referências aos elementos HTML
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

window.addEventListener("load", () => {
  activateInput();
});

// Função para converter as unidades
function convert() {
  // Obtendo os valores das unidades de entrada e saída - (from e to)
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  // Verificando se as unidades de entrada e saída - (from e to) são iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  // Convertendo o valor de entrada(from) para metros(padrão)
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value * 1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  // Convertendo os metros(padrão) para a unidade de saída(to)
  let result;
  switch (toValue) {
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "mm":
      result = meters * 1000;
      break;
  }

  // Exibindo o resultado do input
  outputElement.value = result.toFixed(2);

  // Exibir resultado na mensagem
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${
    inputElement.value
  } ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
  messageElement.textContent = message;
  return;
}

// Adiconando um ouvinte de evento ao botão de conversão
convertButton.addEventListener("click", convert);

function activateInput() {
  inputElement.focus();
}
