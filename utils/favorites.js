function addToFavorite(id, btn) {
  return function () {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");
    favoriteMeal.classList.remove("d-none");

    const favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
    if (favoriteMeals.indexOf(id) === -1) {
      favoriteMeals.push(id);
      btn.innerHTML = "- Remove from favorites";
      btn.classList.add("btn-danger");
      btn.classList.remove("btn-primary");
      btn.addEventListener("click", removeFavorite(id, btn));
    }

    favoriteQuantity.innerHTML = favoriteMeals.length || "";
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  };
}

function removeFavorite(id, btn){
  return function (){
    const favoriteQuantity = document.querySelector(".favorite-quantity");
    let favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
    if (favoriteMeals.indexOf(id) !== -1) {
      favoriteMeals = favoriteMeals.filter((favId) => favId != id);
      btn.innerHTML = "+ Add to favorites";
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-primary");
      btn.addEventListener("click", addToFavorite(id, btn));
    }

    favoriteQuantity.innerHTML = favoriteMeals.length || "";
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  }
}

function removeFromFavorites(id) {
  return function () {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");
    const favoriteElement = document.querySelector(`.favorite-${id}`);

    let favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
    if (favoriteMeals.indexOf(id) !== -1) {
      favoriteMeals = favoriteMeals.filter((favId) => favId != id);
      favoriteElement.remove();
    }

    favoriteQuantity.innerHTML = favoriteMeals.length || "";
    if (favoriteMeals.length === 0) {
      favoriteMeal.classList.add("d-none");
      location.href = `index.html`;
    }
    localStorage.setItem("favoriteMeals", JSON.stringify(favoriteMeals));
  };
}

function checkFavorites() {
  const favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
  if (favoriteMeals.length) {
    const favoriteMeal = document.querySelector(".favorite-meal");
    const favoriteQuantity = document.querySelector(".favorite-quantity");

    favoriteQuantity.innerHTML = favoriteMeals.length || "";
    favoriteMeal.classList.remove("d-none");
  }
}

checkFavorites();
