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

// fixed header when scroll
const bottomHeader = document.querySelector("#bottom-header");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 105) {
    bottomHeader.classList.add("fixed-header");
  } else {
    bottomHeader.classList.remove("fixed-header");
  }
});

const swiper = new Swiper(".comments-slider", {
  slidesPerView: 1,
  spaceBetween: 60,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
      simulateTouch: false,
    },
  },
  speed: 1600,
  autoplay: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
swiper.update();
