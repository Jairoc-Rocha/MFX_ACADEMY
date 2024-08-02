import { sanitizedBackend } from "./api/api";
import "./App.css";
import Header from "./components/Header";
import Investment from "./components/Investment";
import Investments from "./components/Investments";
import Main from "./components/Main";

function Json({ children: json }) {
  return (
    <>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </>
  );
}

function App() {
  return (
    <div>
      <Header>
        <h1>react-investments v1.0.1</h1>
      </Header>

      <Main>
        <Investments>
          {sanitizedBackend.map((investment) => {
            return <Investment key={investment.id}>{investment}</Investment>;
          })}
        </Investments>
      </Main>
    </div>
  );
}

export default App;
