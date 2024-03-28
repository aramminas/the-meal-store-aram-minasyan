async function getMeal(id) {
  const response = await requestApi("lookup.php", `?i=${id}`);

  const meals = response?.meals;

  if (meals?.length) {
    return meals;
  }

  return response;
}

async function initMeal() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const meals = await getMeal(id);

  const mealsContainer = document.querySelector(".meals-container");
  mealsContainer.innerHTML = "";

  if (meals.error || !meals?.length) {
    const alertSection = document.querySelector(".alert-section");
    alertSection.contains(createAlertBlock("Meal not found!"));
    return;
  }

  // get first result
  const meal = meals[0];
  setMainCategoryTitle(meal?.strMeal);
  const mealNode = createSingleMealCard(meal);
  mealsContainer.appendChild(mealNode);
}

initMeal();
