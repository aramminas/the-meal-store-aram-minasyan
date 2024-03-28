// get all categoris from api
async function getCategories() {
  return await requestApi("list.php", "?c=list");
}

async function allCategorys() {
  let categories = [];
  const favoritMeals = JSON.parse(localStorage.getItem("mealCategories"));
  if (!favoritMeals?.length) {
    categories = await getCategories();
    localStorage.setItem(
      "mealCategories",
      JSON.stringify(categories?.meals || [])
    );
    return categories?.meals;
  }

  return favoritMeals;
}

function createCategoryNav(categories) {
  // get parameters from url
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const maxNavItem = 9;
  let categoryList = [];
  const categoryNav = document.querySelector(".main-nav-bar");

  categoryList =
    categories?.length > maxNavItem
      ? categories.slice(0, maxNavItem)
      : categories;

  categoryList.forEach((category) => {
    // list item
    const listItem = document.createElement("li");
    listItem.classList.add("nav-item");

    // link item
    const linkItem = document.createElement("a");
    linkItem.classList.add("nav-link");
    if (!id) {
      linkItem.setAttribute("href", "#");
      const listTextNode = document.createTextNode(category?.strCategory || "");
      linkItem.appendChild(listTextNode);

      linkItem.addEventListener(
        "click",
        (ev) => getSelectedCategory(ev, category?.strCategory || ""),
        false
      );
    } else {
      linkItem.setAttribute(
        "href",
        `../index.html?category=${category?.strCategory}`
      );
      const listTextNode = document.createTextNode(category?.strCategory || "");
      linkItem.appendChild(listTextNode);
    }

    listItem.appendChild(linkItem);
    categoryNav.appendChild(listItem);
  });
}

function getSelectedCategory(ev, category) {
  window.history.replaceState(null, "", window.location.pathname);
  addActiveClasse(ev.target);
  setMainCategoryTitle(category);
  init(category);
}

function addActiveClasse(currentElement) {
  (document.querySelectorAll(".nav-link") || []).forEach((element) => {
    element.classList.remove("active");
  });

  currentElement.classList.add("active");
}

async function initCategories() {
  const getCategories = await allCategorys();

  if (getCategories?.length) {
    createCategoryNav(getCategories);
  }
}

initCategories();
