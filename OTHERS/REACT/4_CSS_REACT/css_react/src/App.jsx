import "./App.css";

// 2 - css e componente
import MyComponent from "./components/MyComponent";

// 6 - css module
import Title from "./components/Title";

function App() {
  // 4 - inline style dinamico
  const n = 15;

  // 5 - Classe dinamica
  const redTitle = true;

  return (
    <>
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css e componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - inline style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}
      >
        Este elemento tem estilos inline
      </p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS inline style dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "pink" }}>
        CSS inline style dinâmico 2
      </h2>
      {/* 5 - Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma clase dinâmica
      </h2>
      {/* 6 - css module */}
      <Title />
    </>
  );
}

export default App;
