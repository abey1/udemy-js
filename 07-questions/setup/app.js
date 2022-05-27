//using selectors inside the element
// traversing the dom

const watcher = [1, 0, 0];
const questions = document.getElementsByClassName("question");
const plus = document.getElementsByClassName("expand-icon");
const minus = document.getElementsByClassName("minimize-icon");

function reset() {
  watcher.forEach((_, index) => {
    watcher[index] = 0;
  });
}

function expand() {
  [...questions].forEach((q, index) => {
    if (watcher[index]) {
      console.log((q.children[0].children[1].style.display = "block"));
      [...plus][index].style.display = "none";
      [...minus][index].style.display = "block";
    } else {
      console.log((q.children[0].children[1].style.display = "none"));
      [...plus][index].style.display = "block";
      [...minus][index].style.display = "none";
    }
  });
}

[...plus].forEach((p) => {
  p.addEventListener("click", () => {
    reset();
    watcher[p.classList[0]] = 1;
    expand();
  });
});

[...minus].forEach((m) => {
  m.addEventListener("click", () => {
    reset();
    watcher[m.classList[0]] = 0;
    expand();
  });
});
