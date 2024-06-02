async function getMeal(id) {
  const response = await requestApi("recipes/", `${id}/information`);

  const meals = response?.id;

  if (meals?.id) {
    return meals;
  }

  return response;
}

async function initMeal() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const meal = await getMeal(id);

  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = "";

  if (meal.error || !meal?.id) {
    const alertSection = document.querySelector(".alert-section");
    alertSection.contains(createAlertBlock("Meal not found!"));
    return;
  }

  // get first result
  setMainCategoryTitle(meal.title);
  const mealNode = createSingleMealCard(meal);
  mealsContainer.appendChild(mealNode);
}

initMeal();
