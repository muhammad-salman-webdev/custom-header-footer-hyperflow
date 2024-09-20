const serviceMenuToggleBtn = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-menu .sub-menu-item.service-menu-toggle-btn "
);
const serviceMenu = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-services-sub-menu"
);
const serviceMenuOverlay = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-services-sub-menu .services-sub-menu-overlay"
);

function toggleServiceBigMenu(act = "") {
  if (act === "close") {
    serviceMenu.classList.remove("anim");
    setTimeout(() => {
      serviceMenu.classList.remove("show");
    }, 300);
    serviceMenuToggleBtn.classList.remove("active");
  } else {
    serviceMenuToggleBtn.classList.toggle("active");

    if (serviceMenuToggleBtn.classList.contains("active")) {
      serviceMenu.classList.add("show");
      setTimeout(() => {
        serviceMenu.classList.add("anim");
      }, 10);
    } else {
      serviceMenu.classList.remove("anim");
      setTimeout(() => {
        serviceMenu.classList.remove("show");
      }, 300);
    }
  }
}
serviceMenuToggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleServiceBigMenu();
});

serviceMenuOverlay.addEventListener("click", toggleServiceBigMenu);

// ###############################

//   Btns
const bigMenuSwiperLeftBtn = document.querySelector(
  ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns button:has(.fa-arrow-left)"
);
const bigMenuSwiperRightBtn = document.querySelector(
  ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns button:has(.fa-arrow-right)"
);

bigMenuSwiperLeftBtn.style.display = "none";
let curSlide = 0;

const swiper = new Swiper("#bigMenuSliderContainer .swiper", {
  loop: true,

  speed: 600,
  spaceBetween: 20,
  navigation: {
    prevEl:
      ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns button:has(.fa-arrow-left)",
    nextEl:
      ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns button:has(.fa-arrow-right)",
  },
  autoplay: {
    delay: 30000000, // Delay between transitions (in milliseconds)
    disableOnInteraction: false, // Keep autoplay after user interactions
  },
  on: {
    slideChange: function () {
      const con = document
        .querySelectorAll(
          ".bigmenu-slider-container#bigMenuSliderContainer .swiper-slide"
        )[0]
        .classList.contains("swiper-slide-active");

      if (con) {
        bigMenuSwiperLeftBtn.style.display = "block";
      }
    },
  },
});

// Pause on hover
const sliderContainer = document.querySelector(
  "#bigMenuSliderContainer .swiper"
);

sliderContainer.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

sliderContainer.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});

setInterval(() => {
  if (bigMenuToggleBtn.classList.contains("_active")) {
    bigMenuSwiperRightBtn.click();
  }
}, 4000);

// ############################################################

const bigMenuToggleBtn = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .big-menu#bigMenuToggleBtn"
);
const headerBigMenu = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-bigmenu-main#customHeaderBigMenu"
);
const headerBigMenuOverlay = document.querySelector(
  "section.custom_header_section#customGlobalHeader .bigmenu-overlay"
);
function toggleHeaderBigMenu() {
  if (bigMenuToggleBtn.classList.contains("_active")) {
    headerBigMenu.classList.remove("anim");
    setTimeout(() => {
      headerBigMenu.classList.remove("show");
    }, 300);
    setTimeout(() => {
      bigMenuToggleBtn.classList.toggle("_active");
    }, 100);
  } else {
    headerBigMenu.classList.add("show");
    bigMenuToggleBtn.classList.toggle("_active");
    setTimeout(() => {
      headerBigMenu.classList.add("anim");
    }, 10);
    toggleServiceBigMenu("close");
  }
}

bigMenuToggleBtn.addEventListener("click", toggleHeaderBigMenu);
headerBigMenuOverlay.addEventListener("click", toggleHeaderBigMenu);

// ###############################

const bigMenuContentToggleSubMenus = document.querySelectorAll(
  ".custom_header_section#customGlobalHeader .custom-bigmenu-main#customHeaderBigMenu .cate-screen-links .cate-links-blocks  > .cate-links-block:has(.triger>h4+i)"
);

bigMenuContentToggleSubMenus.forEach((toggleMenu, index) => {
  const triger = toggleMenu.querySelector(".triger:has(h4+i)");
  triger.addEventListener("click", () => {
    bigMenuContentToggleSubMenus.forEach((_m, _i) => {
      if (index === _i) {
        toggleMenu.classList.toggle("active");
      } else {
        _m.classList.remove("active");
      }
    });
  });
});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

window.addEventListener("load", function () {
  const loadingBar = document.querySelector(
    ".custom-loading-bar#customHeaderLoadingBar"
  );
  let width = 0;
  const interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      loadingBar.style.opacity = "0";
    } else {
      width++;
      loadingBar.style.width = width + "%";
      loadingBar.style.opacity = "1";
    }
  }, 3);
});

//   ----------------

const targetElement = document.getElementById("customHeaderLogoTextAnim");

// Function to toggle class based on scroll position
function toggleClassOnScroll() {
  if (window.scrollY > 10) {
    targetElement.classList.add("anim");
  } else {
    targetElement.classList.remove("anim");
  }
}

// Add scroll event listener
window.addEventListener("scroll", toggleClassOnScroll);
