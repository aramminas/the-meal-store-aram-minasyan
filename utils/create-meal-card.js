function createMealCard(meal, favorite = false) {
  // card column
  const cardCol = document.createElement("div");
  cardCol.classList.add("col-sm-12", "col-md-3");
  if (favorite) {
    cardCol.classList.add(`favorite-${meal.idMeal}`);
  }
  // card container
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "border-dark", "mb-3");

  // card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  const headerTextNode = document.createTextNode(meal.strArea);
  cardHeader.appendChild(headerTextNode);

  // card image
  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.setAttribute("src", getImg(meal.strMealThumb));
  cardImg.setAttribute("alt", "meal picture");

  // card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-dark");
  // card Title
  const cardLink = document.createElement("a");
  cardLink.classList.add("text-decoration-none", "text-dark");
  cardLink.setAttribute("href", `pages/meal.html?id=${meal.idMeal}`);

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "meal-title");
  const titleTextNode = document.createTextNode(meal.strMeal);
  cardTitle.appendChild(titleTextNode);
  cardLink.appendChild(cardTitle);

  // card text (category)
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  // cart small
  const cardSmall = document.createElement("small");
  cardSmall.classList.add("text-muted");
  const smallTextNode = document.createTextNode(meal.strCategory);
  cardSmall.appendChild(smallTextNode);
  cardText.appendChild(cardSmall);

  // card text (description)
  const cardTextDesc = document.createElement("p");
  cardTextDesc.classList.add("card-text", "desc-text");
  const descTextNode = document.createTextNode(cutText(meal.strInstructions));
  cardTextDesc.appendChild(descTextNode);

  // card button (add)
  const cardButton = addButton(meal.idMeal, favorite);

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

function addButton(id, favorite = false) {
  const cardButton = document.createElement("button");
  const btnClass = favorite ? "btn-danger" : "btn-primary";
  const btnText = favorite ? "- Remove from favorites" : "+ Add to favorites";
  const btnAction = favorite ? removeFromFavorites(id) : addToFavorite(id);
  cardButton.classList.add("btn", "btn-sm", "btn-block", "w-100", btnClass);
  const buttonTextNode = document.createTextNode(btnText);
  cardButton.appendChild(buttonTextNode);
  cardButton.addEventListener("click", btnAction);

  return cardButton;
}
