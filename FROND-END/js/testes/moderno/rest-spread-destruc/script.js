window.addEventListener("load", () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  const marriedMen = people.results.filter((person) => {
    return person.name.title === "Mr";
  });

  const marriedWomen = people.results.filter((person) => {
    return person.name.title === "Ms";
  });

  const marriedPeople = [...marriedMen, ...marriedWomen];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
}

const infiniteSum = (...numbers) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

function doDestructuring() {
  const firstLogin = people.results[0];

  const { username, password } = firstLogin.login;

  console.log(username);
  console.log(password);
}
