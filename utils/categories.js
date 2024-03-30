const categories = [
  "African",
  "Asian",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

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
      linkItem.addEventListener(
        "click",
        (ev) => getSelectedCategory(ev, category),
        false
      );
    }

    const categoryPath = !id ? "#" : `../index.html?category=${category}`;
    const listTextNode = document.createTextNode(category);
    linkItem.setAttribute("href", categoryPath);
    linkItem.appendChild(listTextNode);

    listItem.appendChild(linkItem);
    categoryNav.appendChild(listItem);
  });
}

function getSelectedCategory(ev, category) {
  window.history.replaceState(null, "", window.location.pathname);
  addActiveClasse(ev.target);
  setMainCategoryTitle(category);
  init("recipes/complexSearch", `/?cuisine=${category}`, "category");
}

function addActiveClasse(currentElement) {
  (document.querySelectorAll(".nav-link") || []).forEach((element) => {
    element.classList.remove("active");
  });

  currentElement.classList.add("active");
}

async function initCategories() {
  createCategoryNav(categories);
}

initCategories();
