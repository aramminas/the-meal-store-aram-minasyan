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
  cardImg.setAttribute("src", getImg(meal.image, true));
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
  const titleTextNode = document.createTextNode(meal.title);
  cardTitle.appendChild(titleTextNode);

  // card text (description)
  const cardTextDesc = document.createElement("p");
  cardTextDesc.classList.add("card-text", "desc-text");
  cardTextDesc.insertAdjacentHTML("beforeend", meal.summary || "");

  // card text (category, area)
  const cardCategoryText = document.createElement("p");
  cardCategoryText.classList.add("card-text");

  const cardCategoryTitleTextNode = document.createTextNode("Category: ");
  cardCategoryText.appendChild(cardCategoryTitleTextNode);
  // cart small
  const cardCategorySmall = document.createElement("small");
  cardCategorySmall.classList.add("text-muted");
  const smallCategoryTextNode = document.createTextNode(`${meal.sourceName}`);
  cardCategorySmall.appendChild(smallCategoryTextNode);
  cardCategoryText.appendChild(cardCategorySmall);

  // card text instructions
  const cardInstructionsText = document.createElement("p");
  cardInstructionsText.classList.add("card-text");

  // meal instructions
  const cardInstructionsTitleTextNode =
    document.createTextNode("Instructions: ");
  cardInstructionsText.appendChild(cardInstructionsTitleTextNode);
  // cart instructions small
  const cardInstructionsSmall = document.createElement("small");
  cardInstructionsSmall.classList.add("text-muted");
  cardInstructionsSmall.insertAdjacentHTML(
    "beforeend",
    meal?.instructions || ""
  );
  cardInstructionsText.appendChild(cardInstructionsSmall);
  // cardTextDesc.insertAdjacentHTML("beforeend", meal.summary || "");

  // card source link
  const cardSourceLink = document.createElement("a");
  cardSourceLink.classList.add("text-decoration-none", "text-info");
  cardSourceLink.setAttribute("href", meal.sourceUrl);
  cardSourceLink.setAttribute("target", "_blank");
  const sourceTextNode = document.createTextNode("Source site");
  cardSourceLink.appendChild(sourceTextNode);

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
  cardButton.addEventListener("click", addToFavorite(meal.id));

  // append meal context child nodes
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardTextDesc);
  cardBody.appendChild(cardCategoryText);
  cardBody.appendChild(cardInstructionsText);
  cardBody.appendChild(cardSourceLink);
  cardBody.appendChild(cardButton);

  cardColContext.appendChild(cardBody);
  cardRow.appendChild(cardColContext);

  return cardMainCol;
}
