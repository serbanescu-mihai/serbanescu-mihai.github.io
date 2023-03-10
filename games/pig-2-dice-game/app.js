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
const playerName = document.querySelectorAll(".player-name");
const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".roll");
const holdDice = document.querySelector(".hold");

const currentScore0 = document.querySelector(".current-score-0");
const currentScore1 = document.querySelector(".current-score-1");
const totalScore0 = document.querySelector(".total-score-0");
const totalScore1 = document.querySelector(".total-score-1");

const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

//PIG 2
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

// totalScore0.textContent = 0;
// totalScore1.textContent = 0;
// dice.classList.add("hidden");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let score0 = 0;
let diceValue = 0;

const newGame = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0 = 0;
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};
newGame();

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent =
    currentScore;
  // switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};
//custom player name
playerName.forEach((e) => {
  e.addEventListener("click", () => {
    e.textContent = "";
  });
});

rollDice.addEventListener("click", () => {
  if (playing) {
    let diceValue1 = Math.floor(Math.random() * 6 + 1);
    let diceValue2 = Math.floor(Math.random() * 6 + 1);
    dice1.src = `images/dice-${diceValue1}.png`;
    dice2.src = `images/dice-${diceValue2}.png`;
    dice1.classList.remove("hidden");
    dice2.classList.remove("hidden");

    if (diceValue1 === diceValue2) {
      if (diceValue1 === 1) {
        scores[activePlayer] = 0;
        document.querySelector(`.total-score-${activePlayer}`).textContent = 0;
        switchPlayer();
      } else {
        diceValue = diceValue1 * diceValue2;
        currentScore += diceValue;
        document.querySelector(`.current-score-${activePlayer}`).textContent =
          currentScore;
      }
    } else {
      if (diceValue1 === 1 || diceValue2 === 1) {
        switchPlayer();
      } else {
        diceValue = diceValue1 + diceValue2;
        currentScore += diceValue;
        document.querySelector(`.current-score-${activePlayer}`).textContent =
          currentScore;
      }
    }
  }
});

holdDice.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.total-score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] > 100) {
      playing = false;
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
      dice1.classList.add("hidden");
      dice2.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

playAgain.addEventListener("click", () => {
  newGame();
});
