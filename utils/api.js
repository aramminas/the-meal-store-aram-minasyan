const API_URL = "http://www.themealdb.com/api/json/v1/1";

async function requestApi(type = "", query = "") {
  try {
    const queryType = type || "search.php";
    const response = await fetch(`${API_URL}/${queryType}${query}`);

    return await response.json();
  } catch (error) {
    const mealsContainer = document.querySelector(".alert-section");
    const alertElement = createAlertBlock();

    mealsContainer.innerHTML = "";
    mealsContainer.appendChild(alertElement);
    return { errot: true };
  }
}
