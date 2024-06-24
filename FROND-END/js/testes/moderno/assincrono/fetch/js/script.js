window.addEventListener("load", () => {
  doFetch();
});

function showData(data) {
  const user = document.querySelector("#user");
  user.textContent = data.login + " " + data.name;
}

async function doFetch() {
  const res = await fetch("https://api.github.com/users/rrgomide");
  const json = await res.json();
  showData(json);
  console.log(json);
}
