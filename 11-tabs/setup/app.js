const choosen = [1, 0, 0];
const tabsList = document.getElementsByClassName("tab");
const tabsContent = document.getElementsByClassName("tab-content");

function displayTabContent() {
  [...tabsContent].forEach((e, index) => {
    choosen[index] == 1
      ? (e.style.display = "block")
      : (e.style.display = "none");
  });
}

function styleChoosen() {
  [...tabsList].forEach((e, index) => {
    if (choosen[index] == 1) {
      e.style.background = "white";
      e.style.color = "black";
    } else {
      e.style.background = "#c2d6f4";
      e.style.color = "rgb(112, 112, 241)";
    }
  });
}

styleChoosen();
displayTabContent();

function makeZero() {
  for (let i = 0; i < choosen.length; i++) {
    choosen[i] = 0;
  }
}

[...tabsList].forEach((e, index) => {
  e.addEventListener("click", () => {
    makeZero();
    choosen[index] = 1;
    styleChoosen();
    displayTabContent();
  });
});
