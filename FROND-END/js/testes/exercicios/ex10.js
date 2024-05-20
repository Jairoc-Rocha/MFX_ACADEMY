// Exercicios sobre funções

function autoEscola(idade) {
  if (idade >= 18) {
    return console.log(`Pode entrar na auto escola porque tem ${idade} anos`);
  } else {
    return console.log(
      `Não pode entrar na auto escola porque tem ${idade} anos`
    );
  }
}

autoEscola(20);
autoEscola(17);
