async function getMealByName(mealName) {
  const mealsContainer = document.querySelector(".meals-container");
  const alertSection = document.querySelector(".alert-section");

  const result = await requestApi(null, `?s=${mealName}`);

  mealsContainer.innerHTML = "";
  alertSection.innerHTML = "";
  if (!result?.meals) {
    const alertSection = document.querySelector(".alert-section");
    alertSection.contains(createAlertBlock("Meal not found!"));
    return;
  }

  // set main title
  setMainCategoryTitle(mealName);
  // create meal node and append to list
  result.meals.forEach((meal) => {
    const mealNode = createMealCard(meal);
    mealsContainer.appendChild(mealNode);
  });
}

async function handleSearchSubmit(event) {
  event.preventDefault();
  const formFields = event?.target?.elements;
  const searchValue = (formFields?.search?.value || "").trim();

  if (searchValue) {
    getMealByName(searchValue);
  }
}

function searchInit() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchValue = urlParams.get("search");
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", handleSearchSubmit);

  if (searchValue) {
    getMealByName(searchValue);
  }
}

searchInit();
