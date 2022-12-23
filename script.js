const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let currentPlayer = 0;
const scores = [0, 0];
let score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

let score00 = document.querySelector("#current--0");
let score01 = document.querySelector("#current--1");

const dice = document.querySelector(".dice");
dice.classList.add("hidden");

let currentScore = 0;

function switchPlayer() {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  if (currentPlayer === 0) currentPlayer = 1;
  else currentPlayer = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}
function resetGame() {
  score0.textContent = 0;
  score1.textContent = 0;
  score00.textContent = 0;
  score01.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  dice.src = "";
}

btnroll.addEventListener("click", function () {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  dice.src = `photo/dice-${randomDice}.png`;

  // display dice
  dice.classList.remove("hidden");

  //check if roled one
  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnhold.addEventListener("click", function () {
  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[currentPlayer];

  if (document.getElementById(`score--${currentPlayer}`).textContent >= 100) {
    alert(`Gongratulations player ${currentPlayer + 1} Won`);
    resetGame();
  } else switchPlayer();
});
btnnew.addEventListener("click", resetGame);
