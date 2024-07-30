const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou o evento com função");
  };

  //   8 - Função com renderização
  const renderSomething = (parametro) => {
    if (parametro) {
      return <h4>Renderizando isso!</h4>;
    } else {
      return <h4>Renderizado outra coisa!</h4>;
    }
  };

  return (
    <>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Clique aqui
        </button>
        {/* 7 - evento com função */}
        <div>
          <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função com renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </>
  );
};

export default Events;
