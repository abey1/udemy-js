// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

let menuOpened = false;

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

window.addEventListener("resize", () => {
  window.innerWidth >= 800 ? (nav.style.height = "50px") : null;
});

menu.addEventListener("click", () => {
  window.innerWidth < 800
    ? nav.style.height == "50px"
      ? (nav.style.height = "200px")
      : (nav.style.height = "50px")
    : null;
});
