/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

// GET function

const getInfo = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    renderInfo(data);
  } catch (err) {
    console.error(err);
  }
};
getInfo();

// Display Info

const renderInfo = (array) => {
  const output = document.getElementById('output');

  if (!output && !array) {
    return console.log('data does not exist and output is not exist');
  }

  document.getElementById('btn').addEventListener('click', () => {
    array.forEach((user) => {
      const loginEl = document.createElement('h3');
      loginEl.textContent = user.login;

      const avatarEl = document.createElement('img');
      avatarEl.src = user.avatar_url;
      avatarEl.alt = `${user.login}  photo`;

      const cardEl = document.createElement('div');
      cardEl.classList = 'card';
      cardEl.append(avatarEl, loginEl);
      const userSectionEl = document.getElementById('output');
      userSectionEl.append(cardEl);

      const removeEl = document.getElementById('message');
      removeEl.classList = 'remove';
    });
  });
};
