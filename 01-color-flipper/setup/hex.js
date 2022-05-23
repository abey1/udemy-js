const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorHolder = document.querySelector(".color");
const body = document.getElementsByTagName("body");

function getRandomHex() {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hex[Math.floor(Math.random() * hex.length)];
  }
  return randomHex;
}

btn.addEventListener("click", () => {
  const r = hex[Math.floor(Math.random() * hex.length)];
  const v = getRandomHex();
  console.log(v);
  colorHolder.innerText = v;
  [...body][0].style.background = v;
});
