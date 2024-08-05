function capturaDados() {
  const marca = document.querySelector("#marca").value;
  const modelo = document.querySelector("#modelo").value;
  const placa = document.querySelector("#placa").value;
  const carrosCadastrados = document.querySelector("#carrosCadastrados");

  const template = `
  <div>
      <h2>${marca}</h2>
      <p>${modelo}</p>
      <p>${placa}</p>
  </div>
`;

  //   carrosCadastrados.innerHTML = carrosCadastrados.innerHTML + template;
  carrosCadastrados.innerHTML += template;
}
