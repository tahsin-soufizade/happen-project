// open header list
const headerBurgerButton = document.querySelector(".burger-btn");
const headerNavbar = document.querySelector(".header-navbar");

headerBurgerButton.addEventListener("click", () => {
  headerNavbar.classList.add("show-header-navbar");
  document.body.style.overflow = "hidden";
});

// close header list
const headerCloseButton = document.querySelector(".close-header-btn");

headerCloseButton.addEventListener("click", () => {
  headerNavbar.classList.remove("show-header-navbar");
  document.body.style.overflow = "auto";
});

headerNavbar.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("show-header-navbar")) {
    headerNavbar.classList.remove("show-header-navbar");
    document.body.style.overflow = "auto";
  }
});
