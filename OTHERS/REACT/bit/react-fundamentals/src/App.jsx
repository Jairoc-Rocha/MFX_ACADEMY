function App() {
  const tech = "React and Javascript";
  const status = false;

  function sum(a, b) {
    return a + b;
  }

  return (
    <>
      <h1>{tech} are awesome!</h1>
      <h2>It's so easy, like 2 + 1 is {sum(2, 1)} ok?</h2>
      <h3>Current status: {status ? "ON" : "OFF"}</h3>
      <h3>{true && "Text"}</h3>
    </>
  );
}

export default App;
