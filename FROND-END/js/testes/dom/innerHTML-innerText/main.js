const container = document.querySelector("#container");
const containerB = document.querySelector("#container-b");
const containerC = document.querySelector("#container-c");

// innerHTML adiciona html e texto no elemento
container.innerHTML = `<ul>
                         <li>Home</li>   
                         <li>Produtos</li>   
                         <li>Sobre</li>   
                       </ul>
                      `;

// innerText adiciona texto no elemento
containerB.innerText = `<ul>
                         <li>Home</li>   
                         <li>Produtos</li>   
                         <li>Sobre</li>   
                       </ul>
                      `;

// textContent adiciona texto no elemento
containerC.textContent = `<ul>
                         <li>Home</li>   
                         <li>Produtos</li>   
                         <li>Sobre</li>   
                       </ul>
                      `;
