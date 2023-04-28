/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const weightInKg = document.getElementById('search').value;
  console.log(weightInKg);
  const calcWeight = (kg) => {
    const weightInLb = Math.round(kg * 2.2046 * 100) / 100;
    const weightInG = kg * 1000;
    const weightInOz = Math.round(kg * 35.274 * 100) / 100;
    const output = document.getElementById('output');
    output.textContent = `${weightInKg} kg. is equal ${weightInLb} lb, ${weightInG} grams, ${weightInOz} Oz`;
    output.classList('#output');
  };
  form.reset();
  calcWeight(weightInKg);
});
