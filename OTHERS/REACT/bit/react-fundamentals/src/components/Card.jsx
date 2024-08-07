import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <img
        src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
        alt="post star wars 1977"
      />
      <div className="informations">
        <h1>Pôster: Star Wars (1977)</h1>
        <p>
          Um pôste decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Esta clássico pôste trará aventua, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          Perca a chance de adicionar essa linda memória ao se acervo!
        </p>
        <button>Comprar agora</button>
      </div>
    </div>
  );
};

export default Card;
