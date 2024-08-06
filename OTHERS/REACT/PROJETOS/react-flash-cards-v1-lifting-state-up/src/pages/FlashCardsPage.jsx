import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import FlashCard from "../components/FlashCard";
import { allFlashCards } from "../data/allFlashCards";
import FlahsCards from "../components/FlahsCards";
import Button from "../components/Button";
import { helperShuffleArray } from "../helpers/arrayHelpers";
import RadioButton from "../components/RadioButton";

const FlashCardsPage = () => {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClik() {
    const shuffledCards = helperShuffleArray(allCards);

    setAllCards(shuffledCards);
  }

  function handleRadioShowTitleClick() {
    const updateCards = [...allCards].map((card) => ({
      ...card,
      showTitle: true,
    }));

    setAllCards(updateCards);

    setRadioButtonShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    const updateCards = [...allCards].map((card) => ({
      ...card,
      showTitle: false,
    }));

    setAllCards(updateCards);

    setRadioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updateCards = [...allCards];
    const cardIndex = updateCards.findIndex((card) => card.id === cardId);
    updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle;

    setAllCards(updateCards);
  }

  return (
    <div>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClik}>Embaralhar cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar título
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descrição
          </RadioButton>
        </div>

        <FlahsCards>
          {allCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlahsCards>
      </Main>
    </div>
  );
};

export default FlashCardsPage;
