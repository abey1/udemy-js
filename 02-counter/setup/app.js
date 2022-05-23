const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const number = document.getElementById("number");

number.addEventListener("DOMSubtreeModified", () => {
  parseInt(number.innerHTML) > 0
    ? (number.style.color = "green")
    : parseInt(number.innerHTML) == 0
    ? (number.style.color = "black")
    : (number.style.color = "red");
});

increaseBtn.addEventListener("click", () => {
  number.innerHTML = parseInt(number.innerHTML) + 1;
  console.log("increase");
});
decreaseBtn.addEventListener("click", () => {
  number.innerHTML = parseInt(number.innerHTML) - 1;
  console.log("decrease");
});
resetBtn.addEventListener("click", () => {
  number.innerHTML = 0;
  console.log("reset");
});
