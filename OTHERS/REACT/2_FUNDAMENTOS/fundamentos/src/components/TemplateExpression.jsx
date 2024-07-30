// 4 - template expression

const TemplateExpression = () => {
  const name = "Matheus";

  const data = {
    age: 31,
    job: "Programador",
  };

  return (
    <>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vindo {name}</h3>
      <p>
        Sua idade é {data.age} anos e você é um {data.job}
      </p>
    </>
  );
};

export default TemplateExpression;
