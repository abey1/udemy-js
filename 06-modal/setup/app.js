// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModal = document.getElementById("btn");
const modalContainer = document.getElementById("modal-container");
const cross = document.getElementById("cross");

openModal.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

cross.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
