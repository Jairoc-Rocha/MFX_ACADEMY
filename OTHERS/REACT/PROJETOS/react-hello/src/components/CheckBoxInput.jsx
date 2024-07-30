function CheckBoxInput({
  labelDescription = "Descrição do checkbox",
  inputValue = "Valor padrão do input",
  onCheckBoxChange = null,
  id = "id_do_input_checkbox",
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckBoxChange) {
      onCheckBoxChange();
    }
  }

  return (
    <div className="flex flex-row items-center space-x-1 my-4">
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}

export default CheckBoxInput;
