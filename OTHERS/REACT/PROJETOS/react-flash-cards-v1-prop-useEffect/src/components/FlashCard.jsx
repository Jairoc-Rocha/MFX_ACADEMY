import { useEffect, useState } from "react";

const FlashCard = ({
  title = "Título do card",
  description = "Descrição do card",
  showFlashCardTitle = true,
}) => {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    // setShowTitle(!showTitle);
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }

  const fontSizeClassName = showTitle ? "text-xl" : "text-sm";

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
                    flex flex-row items-center justify-center 
                    font-semibold font-mono ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
};

export default FlashCard;
