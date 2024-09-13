const serviceMenuToggleBtn = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-menu .sub-menu-item.service-menu-toggle-btn "
);
const serviceMenu = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-services-sub-menu"
);
const serviceMenuOverlay = document.querySelector(
  "section.custom_header_section#customGlobalHeader .custom-header-main .custom-services-sub-menu .services-sub-menu-overlay"
);

function toggleServiceBigMenu() {
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
serviceMenuToggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleServiceBigMenu();
});

serviceMenuOverlay.addEventListener("click", toggleServiceBigMenu);
