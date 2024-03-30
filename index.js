async function getMeals(type, query, responseType = "") {
  const response = await requestApi(type, `${query}`);

  if (response?.results) {
    return response?.results || [];
  } else if (response?.recipes) {
    return response?.recipes || [];
  }

  return response;
}

async function init(
  type = "recipes/",
  query = "random?number=10",
  responseType = ""
) {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const favorites = urlParams.get("favorites");
  const search = urlParams.get("search");

  if (favorites || search) {
    // if favorites, search flags exists then other requests should be stopped
    return;
  }

  const mealsContainer = document.querySelector(".meals-container");
  const setQuery = category ? `?cuisine=${category}` : query;
  const setType = category ? "recipes/complexSearch/" : type;

  const getMealsData = await getMeals(setType, setQuery, responseType);

  mealsContainer.innerHTML = "";
  if (getMealsData.error || !getMealsData?.length) {
    const alertSection = document.querySelector(".alert-section");
    alertSection.contains(createAlertBlock("Meal not found!"));
    return;
  }

  // set main title
  setMainCategoryTitle(category || "Meals");
  // create meal node and append to list
  getMealsData.forEach((meal) => {
    const mealNode = createMealCard(meal);
    mealsContainer.appendChild(mealNode);
  });
}

init();
