const cross = document.getElementById("cross");
const sidebar = document.getElementById("sidebar");

const menuicon = document.getElementById("menu-icon");

menuicon.addEventListener("click", () => {
  sidebar.style.left == "-600px"
    ? (sidebar.style.left = "0px")
    : (sidebar.style.left = "-600px");
});

cross.addEventListener("click", () => {
  sidebar.style.left = "-600px";
});
