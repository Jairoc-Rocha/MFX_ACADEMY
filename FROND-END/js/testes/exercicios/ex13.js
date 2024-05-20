// Exercicios sobre funções

function imprimeTexto(texto) {
  if (texto.length > 10) {
    return console.log(`Texto muito longo`);
  } else {
    return console.log(`Texto dentro do limite`);
  }
}

imprimeTexto("Jairo Cordeiro da Rocha");
imprimeTexto("Jairo");
