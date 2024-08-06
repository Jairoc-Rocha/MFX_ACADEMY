import { getNewId } from "../services/idServices";

const RadioButton = ({
  id = getNewId(),
  name = "radioButtonName",
  children: buttonDescription = "Descrição do botão",
  buttonChecked = false,
  onButtonClick = null,
}) => {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        type="radio"
        name={name}
        id={id}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
};

export default RadioButton;