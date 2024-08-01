import { sanitizedBackend } from "./api/api";
import "./App.css";

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
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            react-investments v1.0.1
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <Json>{sanitizedBackend}</Json>
        </div>
      </main>
    </div>
  );
}

export default App;
