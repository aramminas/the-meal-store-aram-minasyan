const API_URL = "https://api.spoonacular.com";
const options = {
  method: "GET",
  headers: {
    "x-api-key": "daae5cc661c148d7876c687e55cf9c95",
    "Content-Type": "application/json",
  },
};

async function requestApi(type = "", query = "") {
  try {
    const queryType = type || "search.php";
    const response = await fetch(`${API_URL}/${queryType}${query}`, options);

    return await response.json();
  } catch (error) {
    const mealsContainer = document.querySelector(".alert-section");
    const alertElement = createAlertBlock();

    mealsContainer.innerHTML = "";
    mealsContainer.appendChild(alertElement);
    return { errot: true };
  }
}
