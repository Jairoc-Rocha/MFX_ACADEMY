function addList() {
  const text = document.querySelector("#conteudo_lista").value;

  if (text !== "") {
    const structureHTML = `
      <div class="content_list>
        <div class="text" onclick="checkItem(this)">
          <h3>${text}</h3>
        </div>
        <div class="remove">
          <button class="remove-item" onclick="removeItem(this)">Remover</button>
        </div>
      </div>
    `;

    document.querySelector("#list").innerHTML += structureHTML;

    document.querySelector("#conteudo_lista").value = "";
  }
}
