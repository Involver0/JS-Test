/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const getCarsBrands = async () => {
  try {
    const response = await fetch('./cars.json');
    const data = await response.json();
    renderCarBrands(data);
  } catch (err) {
    console.log(err);
  }
};
getCarsBrands();

const renderCarBrands = (carBrands) => {
  const output = document.getElementById('output');
  if (!output && !carBrands) {
    return console.log('data does not exist and output is not exist');
  }
  carBrands.forEach((carBrand) => {
    for (i = 0; i <= carBrand.models.length; i++) {
      // Element creation
      const cardEl = document.createElement('div');
      const headingEl = document.createElement('h3');
      const ulEl = document.createElement('ul');
      let liEl = document.createElement('li');

      // Assigning
      headingEl.textContent = carBrand.brand;
      liEl.textContent = carBrand.models[i];
      // Styling
      cardEl.classList = 'card';
      // Append
      ulEl.appendChild(liEl); // nesugalvoju kaip cia su appendinti kad sudetu kelis i viena
      cardEl.append(headingEl, ulEl);
      output.append(cardEl);
    }
  });
};
