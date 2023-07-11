const navigationHead = document.querySelector(".webpage__head");
const primaryNavLinks = document.querySelector(".webpage__nav");
const menuToggleBtn = document.querySelector(".hambugger__menu");
const pageBody = document.querySelector("body");

menuToggleBtn.addEventListener("click", () => {
  const menuVisibility = primaryNavLinks.getAttribute("data-visible");

  if (menuVisibility === "false") {
    primaryNavLinks.setAttribute("data-visible", true);
    menuToggleBtn.setAttribute("aria-expanded", true);
    pageBody.classList.add("bodyPositionFixed");
    navigationHead.classList.remove("navSticky");
  } else if (menuVisibility === "true") {
    primaryNavLinks.setAttribute("data-visible", false);
    menuToggleBtn.setAttribute("aria-expanded", false);
    pageBody.classList.remove("bodyPositionFixed");
    navigationHead.classList.add("navSticky");
  }
});
