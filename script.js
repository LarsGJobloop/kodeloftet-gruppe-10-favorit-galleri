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

/**
 * Favorit funksjonen
 *
 * @param {Element} card
 */
function toggleFavorited(card) {
  // Hent ut bilde url og bilde navn
  let image = card.querySelector("img");

  // Lag bilde objektet
  let imageObject = {
    url: image.src,
    name: image.alt,
  };

  console.log(imageObject);
}
