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

// ############################################################

const bigMenuToggleBtn = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .big-menu#bigMenuToggleBtn"
);
const headerBigMenu = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-bigmenu-main#customHeaderBigMenu"
);

bigMenuToggleBtn.addEventListener("click", () => {
  if (bigMenuToggleBtn.classList.contains("active")) {
    headerBigMenu.classList.remove("anim");
    setTimeout(() => {
      headerBigMenu.classList.remove("show");
    }, 300);
    setTimeout(() => {
      bigMenuToggleBtn.classList.toggle("active");
    }, 100);
  } else {
    headerBigMenu.classList.add("show");
    bigMenuToggleBtn.classList.toggle("active");
    setTimeout(() => {
      headerBigMenu.classList.add("anim");
    }, 10);
    toggleServiceBigMenu("close");
  }
});

// ###############################

const swiper = new Swiper("#bigMenuSliderContainer .swiper", {
  loop: true,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  speed: 600,
  spaceBetween: 20,
  navigation: {
    prevEl:
      ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns .fa-arrow-left",
    nextEl:
      ".bigmenu-slider-container#bigMenuSliderContainer .slider-btns .fa-arrow-right",
  },
});

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
