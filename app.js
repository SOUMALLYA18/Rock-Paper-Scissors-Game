const restartGame = () => {
  history.back();
};

const openpopup = () => {
  let popUp = document.getElementById("popup");
  if (popUp) {
    popUp.classList.add("open-popup");
  } else {
    console.error("Popup element not found.");
  }
};

const closepopup = () => {
  let popUp = document.getElementById("popup");
  if (popUp) {
    popUp.classList.remove("open-popup");
  } else {
    console.error("Popup element not found.");
  }
};

document
  .getElementById("play-again-btn")
  .addEventListener("click", restartGame);
document.getElementById("rule-btn").addEventListener("click", openpopup);
document.getElementById("back-btn").addEventListener("click", closepopup);
