function createAlertBlock(
  message = "Something went wrong!",
  type = "alert-warning"
) {
  // alert column
  const alertCol = document.createElement("div");
  alertCol.classList.add("col-sm-12", "col-md-6");

  // create alert block
  const alertBlock = document.createElement("div");
  alertBlock.classList.add("alert", type);
  alertBlock.setAttribute("role", "alert");

  // alert message
  const alertTextNode = document.createTextNode(message);

  // append child nodes
  alertBlock.appendChild(alertTextNode);
  alertCol.appendChild(alertBlock);

  return alertCol;
}

function cutText(text) {
  const length = 140;

  return text.length > length ? text.substring(0, length - 3) + "..." : text;
}

function getImg(img, pages = false) {
  const path = pages ? "../" : "./";
  return img ? img : `${path}public/food_default.png`;
}

function setMainCategoryTitle(category) {
  const mainCategory = document.querySelector(".main-title");
  mainCategory.innerHTML = category;
}
