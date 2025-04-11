// Récupération de tout les éléments du dom
const card = document.querySelector(".card");
const cardHeaderImg = document.querySelector(".card-header img");
const cardBodyTitle = document.querySelector(".card-body__title");
const cardBodyAge = document.querySelector(".card-body__infos_age span");
const cardBodyLocation = document.querySelector(
  ".card-body__infos_location span"
);
const cardBodyEmail = document.querySelector(".card-body__infos_email span");
const loader = document.querySelector(".loader");

// Fonction pour récupérer les infos du profil
const fetchUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      updateUI(data);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchUserData();

// Afficher les données reçu dans le dom
const updateUI = (data) => {
  if (data.results.length) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    document.body.appendChild(grid);
    for (let i = 0; i < data.results.length; i++) {
      const imgSrc = data.results[i].picture.large;
      const title =
        data.results[i].name.first + " " + data.results[i].name.last;
      const age = data.results[i].dob.age;
      const location = data.results[i].location.city;
      const email = data.results[i].email;

      const card = `
        <div class="card">
        <div class="card-header">
          <img
            src="${imgSrc}"
            class="card-header__img"
            alt="${title}"
          />
        </div>
        <div class="card-body">
          <h5 class="card-body__title">${title}</h5>
          <div class="card-body__infos">
            <p class="card-body__infos_age">Age: <span>${age}</span></p>
            <p class="card-body__infos_location">Location: <span>${location}</span></p>
            <p class="card-body__infos_email">
              Email: <span>${email}</span>
            </p>
          </div>
        </div>
      </div>
      `;
      grid.insertAdjacentHTML("beforeend", card);
    }
  }
};
