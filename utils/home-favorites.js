async function getFavorite(id) {
  return await requestApi("recipes/", `${id}/information`);
}

async function showFavorites() {
  const favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
  if (favoriteMeals.length) {
    const favoritesList = favoriteMeals.map((favorite) => {
      return getFavorite(favorite);
    });

    const getFavoritesList = await Promise.all(favoritesList);

    // set main title
    setMainCategoryTitle("Favorites list");
    document.body.classList.add("favorite-page");
    // create meal node and append to list
    const mealsContainer = document.querySelector(".meals-container");
    mealsContainer.innerHTML = "";
    getFavoritesList.forEach((meal) => {
      if (!meal.errot) {
        const mealNode = createMealCard(meal, true);
        mealsContainer.appendChild(mealNode);
      }
    });
  }
}

function initHomeFavorites() {
  const favoriteBtn = document.querySelector(".favorite-meal");
  favoriteBtn.addEventListener("click", showFavorites);

  const urlParams = new URLSearchParams(window.location.search);
  const favorites = urlParams.get("favorites");
  if (favorites) {
    showFavorites();
  }
}

initHomeFavorites();
