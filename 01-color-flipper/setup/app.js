const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");
const body = document.getElementsByTagName("body");
btn.addEventListener("click", () => {
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  colorText.innerText = selectedColor;
  [...body][0].style.background = selectedColor;
});
