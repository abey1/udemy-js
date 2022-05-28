let collapseStatus = false;

const nav = document.getElementById("nav");
const logo = document.getElementById("logo");
const menuItems = document.getElementsByClassName("menu-items");
const menuIcon = document.getElementById("menu-icon");
const collapseableMenu = document.getElementById("collapsable-menu");
document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "white";
    logo.style.color = "black";
    [...menuItems].forEach((e) => {
      e.style.color = "black";
    });
    menuIcon.style.color = "black";
  } else if (window.innerWidth > 800) {
    nav.style.background = "transparent";
    logo.style.color = "white";
    [...menuItems].forEach((e) => {
      e.style.color = "white";
    });
    menuIcon.style.color = "white";
  }
  console.log(window.scrollY);
});

menuIcon.addEventListener("click", () => {
  console.log("clicked");
  if (collapseStatus) {
    collapseableMenu.style.animation = "collapse 0s linear both";
    collapseStatus = false;
  } else {
    collapseableMenu.style.animation = "expand 0.3s linear both";
    collapseStatus = true;
  }
});

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
