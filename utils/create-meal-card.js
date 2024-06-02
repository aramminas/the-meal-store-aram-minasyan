function createMealCard(meal, favorite = false) {
  // card column
  const cardCol = document.createElement("div");
  cardCol.classList.add("col-sm-6", "col-md-4", "col-lg-3");
  if (favorite) {
    cardCol.classList.add(`favorite-${meal.id}`);
  }
  // card container
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "border-dark", "mb-3");

  // card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  const headerTextNode = document.createTextNode(meal.title);
  cardHeader.appendChild(headerTextNode);

  // card image
  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.setAttribute("src", getImg(meal.image));
  cardImg.setAttribute("alt", "meal picture");

  // card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-dark");
  // card Title
  const cardLink = document.createElement("a");
  cardLink.classList.add("text-decoration-none", "text-dark");
  cardLink.setAttribute("href", `pages/meal.html?id=${meal.id}`);

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "meal-title");
  const titleTextNode = document.createTextNode(
    meal?.creditsText || meal.title
  );
  cardTitle.appendChild(titleTextNode);
  cardLink.appendChild(cardTitle);

  // card text (category)
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  // cart small
  const cardSmall = document.createElement("small");
  cardSmall.classList.add("text-muted");
  const smallTextNode = document.createTextNode(meal.sourceName || "");
  cardSmall.appendChild(smallTextNode);
  cardText.appendChild(cardSmall);

  // card text (description)
  const cardTextDesc = document.createElement("p");
  cardTextDesc.classList.add("card-text", "desc-text");
  cardTextDesc.insertAdjacentHTML("beforeend", meal.summary || "");

  // card button (add)
  const cardButton = addButton(meal.id, favorite);

  // append child card nodes to 'col'
  cardCol.appendChild(cardDiv);
  cardDiv.appendChild(cardHeader);
  cardDiv.appendChild(cardImg);
  // append child card body nodes to card
  cardBody.appendChild(cardLink);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardTextDesc);
  cardBody.appendChild(cardButton);

  cardDiv.appendChild(cardBody);
  cardCol.appendChild(cardDiv);

  return cardCol;
}

function addButton(id, isFavorite = false) {
  let favorite = isFavorite;
  const isFavoritePage = document.querySelector(".favorite-page");

  const favoriteMeals = JSON.parse(localStorage.getItem("favoriteMeals")) || [];
  if(favoriteMeals.indexOf(id) !== -1){
    favorite = true;
  }

  const cardButton = document.createElement("button");
  const btnClass = favorite ? "btn-danger" : "btn-primary";
  const btnText = favorite ? "- Remove from favorites" : "+ Add to favorites";
  const btnAction = favorite
      ? isFavoritePage
          ? removeFromFavorites(id)
          : removeFavorite(id, cardButton)
      : addToFavorite(id, cardButton);
  cardButton.classList.add("btn", "btn-sm", "btn-block", "w-100", btnClass);
  const buttonTextNode = document.createTextNode(btnText);
  cardButton.appendChild(buttonTextNode);
  cardButton.addEventListener("click", btnAction);

  return cardButton;
}
