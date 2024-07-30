import "./App.css";

// 2 - imagem em assets ou img se for criada
import night from "./assets/night.jpg";

// 3 - useState
import Data from "./components/Data";

// 4 - renderização de listas
import ListRender from "./components/ListRender";

// 7 - renderização condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

// 9 - desestruturando props
import CardDetails from "./components/CardDetails";

// 11 - renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - function em props
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - function em props
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em public */}
      <img src="/img.jpg" alt="Imagem na pasta public" />
      {/* 2 - imagem em assets ou img se for criada */}
      <img src={night} alt="Imamge na pasta assets ou img se for criada" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderização de listas */}
      <ListRender />
      {/* 7 - renderização condicional  */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Matheus" />
      {/* 9 - desestruturando props */}
      <CardDetails brand="VW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CardDetails brand="Fiat" km={123444} color="Branco" />
      <CardDetails brand="Audi" km={9987} color="Azul" />
      {/* // 11 - renderização de listas com componentes */}
      {cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* // 12 - fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>meu Container</p>
        </div>
      </Container>
      {/* 14 - function em props */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
