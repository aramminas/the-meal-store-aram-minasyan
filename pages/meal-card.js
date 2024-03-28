function createSingleMealCard(meal) {
  // card main column
  const cardMainCol = document.createElement("div");
  cardMainCol.classList.add("col-sm-12", "mb-4");

  // card container
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mb-3");
  // card row
  const cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");
  // card col image
  const cardColImage = document.createElement("div");
  cardColImage.classList.add("col-md-4");
  // card image
  const cardImg = document.createElement("img");
  cardImg.classList.add("img-fluid", "rounded-start");
  cardImg.setAttribute("src", getImg(meal.strMealThumb));
  cardImg.setAttribute("alt", "meal picture");

  // append image child nodes
  cardColImage.appendChild(cardImg);
  cardRow.appendChild(cardColImage);
  cardDiv.appendChild(cardRow);
  cardMainCol.appendChild(cardDiv);

  // card context col
  const cardColContext = document.createElement("div");
  cardColContext.classList.add("col-md-8");

  // card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // card title
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  const titleTextNode = document.createTextNode(meal.strMeal);
  cardTitle.appendChild(titleTextNode);

  // card text (description)
  const cardTextDesc = document.createElement("p");
  cardTextDesc.classList.add("card-text", "desc-text");
  const descTextNode = document.createTextNode(meal.strInstructions);
  cardTextDesc.appendChild(descTextNode);

  // card text (category, area)
  const cardCategoryText = document.createElement("p");
  cardCategoryText.classList.add("card-text");

  const cardCategoryTitleTextNode = document.createTextNode("Category: ");
  cardCategoryText.appendChild(cardCategoryTitleTextNode);
  // cart small
  const cardCategorySmall = document.createElement("small");
  cardCategorySmall.classList.add("text-muted");
  const smallCategoryTextNode = document.createTextNode(
    `${meal.strCategory}; ${meal.strArea}`
  );
  cardCategorySmall.appendChild(smallCategoryTextNode);
  cardCategoryText.appendChild(cardCategorySmall);

  // card text tags
  const cardTagsText = document.createElement("p");
  cardTagsText.classList.add("card-text");

  // meal tags
  const cardTagsTitleTextNode = document.createTextNode("Tags: ");
  cardTagsText.appendChild(cardTagsTitleTextNode);
  // cart tags small
  const cardTagsSmall = document.createElement("small");
  cardTagsSmall.classList.add("text-muted");
  const smallTagsTextNode = document.createTextNode(meal.strTags);
  cardTagsSmall.appendChild(smallTagsTextNode);
  cardTagsText.appendChild(cardTagsSmall);

  // card youtube link
  const cardYoutubeLink = document.createElement("a");
  cardYoutubeLink.classList.add("text-decoration-none", "text-danger");
  cardYoutubeLink.setAttribute("href", meal.strYoutube);
  const youtubeTextNode = document.createTextNode("Youtube");
  cardYoutubeLink.appendChild(youtubeTextNode);

  // card button (add)
  const cardButton = document.createElement("button");
  cardButton.classList.add(
    "btn",
    "btn-primary",
    "btn-sm",
    "btn-block",
    "w-100",
    "mt-3"
  );
  const buttonTextNode = document.createTextNode("+ Add to favorites");
  cardButton.appendChild(buttonTextNode);
  cardButton.addEventListener("click", addToFavorite(meal.idMeal));

  // append meal context child nodes
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardTextDesc);
  cardBody.appendChild(cardCategoryText);
  cardBody.appendChild(cardTagsText);
  cardBody.appendChild(cardYoutubeLink);
  cardBody.appendChild(cardButton);

  cardColContext.appendChild(cardBody);
  cardRow.appendChild(cardColContext);

  return cardMainCol;
}
