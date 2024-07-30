const ConditionalRender = () => {
  const x = true;

  const name = "João";

  return (
    <>
      {/* 7 - renderização condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {/* 8 - renderização ternária */}
      <h3>Renderização ternária</h3>
      {name === "João" ? (
        <div>
          <p>Olá João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </>
  );
};

export default ConditionalRender;
