let mudar = document.querySelector("h1");
mudar.textContent = "Jairo Rocha";

let cidade = document.querySelector("#city");
cidade.textContent = "São Paulo, SP";

let dataArray = Array.from(document.querySelectorAll(".data"));
console.log(dataArray);

for (let i = 0; i < dataArray.length; i++) {
  let currentElement = dataArray[i];
  currentElement.classList.add("emphasis");
}

let cor = document.querySelector("h2");
cor.style.color = "blue";

let p1 = document.querySelector(".p1");
p1.classList.add("good");

let p2 = document.querySelector(".p2");
p2.classList.add("great");

let p3 = document.querySelector(".p3");
p3.classList.add("awesome");

p2.classList.remove("great");
