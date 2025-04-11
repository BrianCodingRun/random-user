// Récupération de tout les éléments du dom
const cardHeaderImg = document.querySelector(".card-header img");
const cardBodyTitle = document.querySelector(".card-body__title");
const cardBodyAge = document.querySelector(".card-body__infos_age span");
const cardBodyLocation = document.querySelector(
  ".card-body__infos_location span"
);
const cardBodyEmail = document.querySelector(".card-body__infos_email span");

// Fonction pour récupérer les infos du profil
const fetchUserData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    updateUI(data);
  } catch (error) {
    console.log(error);
  }
};

fetchUserData();

// Afficher les données reçu dans le dom
const updateUI = (data) => {
  if (data.results.length) {
    const imgSrc = data.results[0].picture.large;
    const title = data.results[0].name.first + " " + data.results[0].name.last;
    const age = data.results[0].dob.age;
    const location = data.results[0].location.city;
    const email = data.results[0].email;

    cardHeaderImg.src = imgSrc;
    cardBodyTitle.innerHTML = title;
    cardBodyAge.innerHTML = age;
    cardBodyLocation.innerHTML = location;
    cardBodyEmail.innerHTML = email;
  }
};
