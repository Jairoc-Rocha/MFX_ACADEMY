import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import FlashCard from "../components/FlashCard";
import { allFlashCards } from "../data/allFlashCards";
import FlahsCards from "../components/FlahsCards";
import Button from "../components/Button";
import { helperShuffleArray } from "../helpers/arrayHelpers";

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);

  function handleButtonClik() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  return (
    <div>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClik}>Embaralhar cards</Button>
        </div>
        <FlahsCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlahsCards>
      </Main>
    </div>
  );
};

export default FlashCardsPage;
