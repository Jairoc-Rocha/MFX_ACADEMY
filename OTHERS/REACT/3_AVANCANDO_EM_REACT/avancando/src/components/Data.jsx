import { useState } from "react";

const Data = () => {
  let someData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15);
  const [age, setAge] = useState(41);

  return (
    <>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar valor da variável</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>
      <div>
        <p>Idade: {age}</p>
        <button onClick={() => setAge(42)}>Mudar idade</button>
      </div>
    </>
  );
};

export default Data;
