const handOptions = {
  rock: "./images/rock-hand.png",
  paper: "./images/paper-hand.png",
  scissors: "./images/scisssors-hand.png",
};

let userSCORE = 0;
let cpSCORE = 0;

const storedUserScore = localStorage.getItem("userScore");
const storedCpScore = localStorage.getItem("cpScore");

if (storedUserScore !== null && storedCpScore !== null) {
  userSCORE = parseInt(storedUserScore);
  cpSCORE = parseInt(storedCpScore);
}

const setScore = () => {
  localStorage.setItem("userScore", userSCORE);
  localStorage.setItem("cpScore", cpSCORE);

  document.getElementById("user-score").innerText = userSCORE;
  document.getElementById("cp-score").innerText = cpSCORE;
};

setScore();

const pickUserHand = (hand) => {
  let gameSection = document.querySelector(".game");
  gameSection.style.display = "none";

  let contestSection = document.querySelector(".contest");
  contestSection.style.display = "flex";

  let selectedHandImage = document.getElementById("selected-hand-image");
  selectedHandImage.src = handOptions[hand];

  document.querySelectorAll(".hands").forEach((button) => {
    button.disabled = true;
  });

  let cpHand = pickComputerHand();
  referee(hand, cpHand);

  document.querySelectorAll(".hands").forEach((button) => {
    button.disabled = false;
  });
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  document.getElementById("pc-picked").src = handOptions[cpHand];
  return cpHand;
};

const referee = (userHand, cpHand) => {
  const selectedHandImage = document.getElementById("user-choose-section");
  const pcHandImage = document.getElementById("pc-choose-section");

  const userPickedHeading = document.getElementById("user-hand-heading");
  const computerPickedHeading = document.getElementById("pc-picked-heading");
  const userSelectOption = document.getElementById("user-select-option");
  const computerSelectOption = document.getElementById("pc-select-option");
  const userChoiceHeading = document.getElementById("user-choice-heading");
  const computerChoiceHeading = document.getElementById(
    "computer-choice-heading"
  );

  selectedHandImage.classList.remove("Ellipse-1");
  pcHandImage.classList.remove("Ellipse-1");
  computerPickedHeading.classList.remove("Ellipse-2");
  userPickedHeading.classList.remove("Ellipse-2");
  userSelectOption.classList.remove("Ellipse-3");
  computerSelectOption.classList.remove("Ellipse-3");
  userChoiceHeading.classList.remove("heading-3");
  computerChoiceHeading.classList.remove("heading-3");

  if (userHand === "paper" && cpHand === "scissors") {
    cpSCORE++;
    setDecision("YOU LOST");
    document.getElementById("next-btn").style.display = "none";
    pcHandImage.classList.add("Ellipse-1");
    computerPickedHeading.classList.add("Ellipse-2");
    computerSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "paper" && cpHand === "rock") {
    userSCORE++;
    setDecision("YOU WIN");
    document.getElementById("next-btn").style.display = "block";
    selectedHandImage.classList.add("Ellipse-1");
    userPickedHeading.classList.add("Ellipse-2");
    userSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "paper" && cpHand === "paper") {
    setDecision("TIE UP");
    document.getElementById("next-btn").style.display = "none";
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "rock" && cpHand === "scissors") {
    userSCORE++;
    setDecision("YOU WIN");
    document.getElementById("next-btn").style.display = "block";
    selectedHandImage.classList.add("Ellipse-1");
    userPickedHeading.classList.add("Ellipse-2");
    userSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "rock" && cpHand === "paper") {
    cpSCORE++;
    setDecision("YOU LOST");
    document.getElementById("next-btn").style.display = "none";
    pcHandImage.classList.add("Ellipse-1");
    computerPickedHeading.classList.add("Ellipse-2");
    computerSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "rock" && cpHand === "rock") {
    setDecision("TIE UP");
    document.getElementById("next-btn").style.display = "none";
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "scissors" && cpHand === "scissors") {
    setDecision("TIE UP");
    document.getElementById("next-btn").style.display = "none";
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "scissors" && cpHand === "rock") {
    cpSCORE++;
    setDecision("YOU LOST");
    document.getElementById("next-btn").style.display = "none";
    pcHandImage.classList.add("Ellipse-1");
    computerPickedHeading.classList.add("Ellipse-2");
    computerSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  } else if (userHand === "scissors" && cpHand === "paper") {
    userSCORE++;
    setDecision("YOU WIN");
    document.getElementById("next-btn").style.display = "block";
    selectedHandImage.classList.add("Ellipse-1");
    userPickedHeading.classList.add("Ellipse-2");
    userSelectOption.classList.add("Ellipse-3");
    userChoiceHeading.classList.add("heading-3");
    computerChoiceHeading.classList.add("heading-3");
  }

  setScore();
};

const setDecision = (decision) => {
  document.getElementById("heading-4").innerText = decision;
};

let popUp = document.getElementById("popup");

function openpopup() {
  popUp.classList.add("open-popup");
}

function closepopup() {
  popUp.classList.remove("open-popup");
}

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let gameSection = document.querySelector(".game");
  gameSection.style.display = "flex";
};
