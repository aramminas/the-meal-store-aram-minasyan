async function getMeals(query) {
  const response = await requestApi(null, `?s=${query}`);

  const meals = response?.meals;

  if (meals?.length) {
    return meals;
  }

  return response;
}

async function init(query = "Breakfast") {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const mealsContainer = document.querySelector(".meals-container");
  const setQuery = category ? category : query;
  const getMealsData = await getMeals(setQuery);

  mealsContainer.innerHTML = "";
  if (getMealsData.error || !getMealsData?.length) {
    const alertSection = document.querySelector(".alert-section");
    alertSection.contains(createAlertBlock("Meal not found!"));
    return;
  }

  // set main title
  setMainCategoryTitle(setQuery);
  // create meal node and append to list
  getMealsData.forEach((meal) => {
    const mealNode = createMealCard(meal);
    mealsContainer.appendChild(mealNode);
  });
}

init();
