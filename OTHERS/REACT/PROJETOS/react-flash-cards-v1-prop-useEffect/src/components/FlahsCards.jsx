const FlahsCards = ({ children: flashcards }) => {
  return (
    <div className="border p-2 flex flex-row items-center justify-center flex-wrap">
      {flashcards}
    </div>
  );
};

export default FlahsCards;
