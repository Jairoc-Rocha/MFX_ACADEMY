// 2 - importando do componente
import FirstComponent from "./components/FirstComponents";

// 4 - template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia
import MyComponent from "./components/MyComponent";

// 6 - Eventos
import Events from "./components/Events";

import "./App.css";

function App() {
  // 3 - comentários
  return (
    <>
      {/* 3 - comentário do JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  );
}

export default App;
