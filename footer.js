const footerLogoRows = document.querySelectorAll(
  ".footer-anim-logos-slider#footerAnimLogos .anim-logos-row "
);

function showRow(row) {
  const logos = row.querySelectorAll(".anim-logo");
  logos.forEach((logo, i) => {
    setTimeout(() => {
      logo.classList.add("show");
    }, 180 * (i + 1));
  });
}

function hideRow(row) {
  const logos = row.querySelectorAll(".anim-logo");
  logos.forEach((logo, i) => {
    setTimeout(() => {
      logo.classList.add("hide");
      setTimeout(() => {
        logo.querySelector("img").style.opacity = "0";
        logo.classList.remove("hide");
        logo.classList.remove("show");
        setTimeout(() => {
          logo.querySelector("img").style.opacity = "1";
        }, 300);
      }, 1000);
    }, 180 * (i + 1));
  });
}

let curRow = 0;

showRow(footerLogoRows[curRow]);

setInterval(() => {
  hideRow(footerLogoRows[curRow]);
  curRow++;
  if (curRow === footerLogoRows.length) curRow = 0;

  showRow(footerLogoRows[curRow]);
}, 4000);
