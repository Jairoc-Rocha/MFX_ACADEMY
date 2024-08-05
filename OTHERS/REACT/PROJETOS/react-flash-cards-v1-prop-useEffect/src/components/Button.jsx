const Button = ({
  children: description = "Descrião do botão",
  onButtonClick = null,
}) => {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className="bg-gray-200 p-2 m-1 rounded-md"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
};

export default Button;
