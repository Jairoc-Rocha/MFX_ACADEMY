let idade = 18;
let cnh = true;

if (idade >= 18 && cnh == true) {
  console.log(`Condutor maior de idade ${idade}, Pode dirigir`);
} else if (idade >= 18 && cnh == false) {
  console.log(
    `Condutor é maior de idade ${idade}, porém não pode dirigir porque não tem o cnh`
  );
} else {
  console.log(`Condutor menor de idade ${idade}, não pode dirigir`);
}
