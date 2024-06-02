function toggleMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const menuContainer = document.querySelector(".menu-container");
  mobileMenuBtn.classList.toggle("collapsed");
  menuContainer.classList.toggle("show");
  menuContainer.classList.toggle("bg-dark");
}

function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  mobileMenuBtn.addEventListener("click", toggleMenu);
}

initMobileMenu();
