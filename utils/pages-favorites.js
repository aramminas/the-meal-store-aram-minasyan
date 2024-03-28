function redirectToFavorites() {
  // redirect to home page
  location.href = `../index.html?favorites=1`;
}

function initPagesFavorites() {
  const favoriteBtn = document.querySelector(".favorite-meal");
  favoriteBtn.addEventListener("click", redirectToFavorites);
}
initPagesFavorites();
