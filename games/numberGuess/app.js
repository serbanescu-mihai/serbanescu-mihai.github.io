//general functionality
const howToPlay = document.querySelector(".how-to-play");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const playAgain = document.querySelector(".play-again");

const modalOpenAndClose = (element) => {
  element.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
};

modalOpenAndClose(howToPlay);
modalOpenAndClose(closeModal);
modalOpenAndClose(overlay);

//game functionality
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
let currentScore = 20;
let currentHighscore = 0;
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const container = document.querySelector(".container");
const checkBtn = document.querySelector(".check");

highscore.textContent = currentHighscore;

guess.addEventListener("click", () => {
  guess.value = "";
});

// guess.focus();

checkBtn.addEventListener("click", () => {
  if (!guess.value) {
    message.textContent = "⚠️ You did not imput a number";
  } else {
    if (Number(guess.value) === randomNumber) {
      message.textContent = "🎉 Congratulations! You have guessed the number!";
      number.textContent = guess.value;
      number.style.width = "10rem";
      container.style.backgroundColor = "#00ff6c";
      checkBtn.classList.add("hidden");
      if (currentScore > currentHighscore) {
        currentHighscore = currentScore;
        highscore.textContent = currentHighscore;
      }
    } else if (Number(guess.value) > randomNumber) {
      message.textContent = "Your guess is too high";
      currentScore--;
      score.textContent = currentScore;
    } else if (Number(guess.value) < randomNumber) {
      message.textContent = "Your guess is too low";
      currentScore--;
      score.textContent = currentScore;
    }
  }
});

playAgain.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  message.textContent = "Start guessing...";
  number.textContent = "?";
  number.style.width = "6rem";
  container.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  checkBtn.classList.remove("hidden");
  currentScore = 20;
  score.textContent = currentScore;
  guess.value = "";
});
