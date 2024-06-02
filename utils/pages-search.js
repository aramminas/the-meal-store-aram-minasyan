async function handlePageSearchSubmit(event) {
  event.preventDefault();
  const formFields = event?.target?.elements;
  const searchValue = (formFields?.search?.value || "").trim();

  if (searchValue) {
    // redirect to home page
    location.href = `../index.html?search=${searchValue}`;
  }
}

function pageSearchInit() {
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", handlePageSearchSubmit);
}

pageSearchInit();
