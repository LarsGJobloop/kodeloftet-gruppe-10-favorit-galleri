// Hent ut all "korten" fra HTML
let allImageCards = document.querySelectorAll(".card");

// For hvert av kortene, legg til en favoritt funksjon
for (let imageCard of allImageCards) {
  // Hent ut favoritt knappen
  let favoritButton = imageCard.querySelector("button");

  // Så legger vi til en egen funksjon, arrow funksjon "() => {}"
  favoritButton.addEventListener("click", () => {
    toggleFavorited(imageCard);
  });
}

// Favoritt funksjonen
function toggleFavorited(card) {
  console.log(card);
}
