const Container = ({ children }) => {
  return (
    <>
      <h1>Conteúdo do componente pai</h1>
      {children}
    </>
  );
};

export default Container;
