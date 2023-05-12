let button = document.querySelector(".mobile-toggle");
let navHeader = document.querySelector(".nav-header");

button.addEventListener("click", function () {
  const visibility = navHeader.getAttribute("data-visible");
  if (visibility == "false") {
    navHeader.setAttribute("data-visible", true);
    button.setAttribute("area-expanded", true);
  } else {
    navHeader.setAttribute("data-visible", false);
    button.setAttribute("area-expanded", false);
  }
});
