function addToFavorite(id) {
  return function () {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");
    favoriteMeal.classList.remove("d-none");

    const favoritMeals = JSON.parse(localStorage.getItem("favoritMeals")) || [];
    if (favoritMeals.indexOf(id) === -1) {
      favoritMeals.push(id);
    }

    favoriteQuantity.innerHTML = favoritMeals.length;
    localStorage.setItem("favoritMeals", JSON.stringify(favoritMeals));
  };
}

function removeFromFavorites(id) {
  return function () {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");
    const favoriteElement = document.querySelector(`.favorite-${id}`);

    let favoritMeals = JSON.parse(localStorage.getItem("favoritMeals")) || [];
    if (favoritMeals.indexOf(id) !== -1) {
      favoritMeals = favoritMeals.filter((favId) => favId != id);
      favoriteElement.remove();
    }

    favoriteQuantity.innerHTML = favoritMeals.length;
    if (favoritMeals.length === 0) {
      favoriteMeal.classList.add("d-none");
    }
    localStorage.setItem("favoritMeals", JSON.stringify(favoritMeals));
  };
}

function checkFavorites() {
  const favoritMeals = JSON.parse(localStorage.getItem("favoritMeals")) || [];
  if (favoritMeals.length) {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");

    favoriteQuantity.innerHTML = favoritMeals.length;
    favoriteMeal.classList.remove("d-none");
  }
}

checkFavorites();
