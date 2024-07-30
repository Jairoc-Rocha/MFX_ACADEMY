function clickButtonMedia() {
  // Objeto que busca os valores dos inputs informados
  const notas = {
    primeiraNota: document.getElementById("nota1").value,
    segundaNota: document.getElementById("nota2").value,
    terceiraNota: document.getElementById("nota3").value,
  };

  // Chama a função calculoMedia, onde é executado a lógica do calculo para retorno da média do aluno
  const mediaNota = calculoMedia(notas);

  if (mediaNota >= 8) {
    document.getElementById("mensagem_aluno").textContent =
      "Parabéns! Você arrasou e fechou o semestre com chave de ouro!";
  } else if (mediaNota <= 7 && mediaNota >= 6) {
    document.getElementById("mensagem_aluno").textContent =
      "Por pouco ein... Você passou, mas poderia ter se esfoçado mais.";
  } else {
    document.getElementById("mensagem_aluno").textContent =
      "Que pena... você reprovou!";
  }
  document.getElementById("media_aluno").textContent = mediaNota.toFixed(1);
}

function calculoMedia(notas) {
  // Valida se todas as notas foram informadas
  if (
    notas.primeiraNota !== "" &&
    notas.segundaNota !== "" &&
    notas.terceiraNota !== ""
  ) {
    // transforma as notas em número, para que assim seja realizado a soma de todas as notas
    const resultadoTotal =
      parseInt(notas.primeiraNota) +
      parseInt(notas.segundaNota) +
      parseInt(notas.terceiraNota);

    // Realiza o calculo da média
    const media = resultadoTotal / 3;

    // retorna a média para a função clickButtonMedia, onde a função é chamada
    return media;
  } else {
    // Para a execução do script e apresenta um erro
    alert("Preencha todas as notas!!!!!");
    throw "Preencha todas as notas!!!!!";
  }
}
