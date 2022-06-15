const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");

const playingTo = document.querySelector("#playTo");

const playerOneBtn = document.querySelector("#playerOneBtn");
const playerTwoBtn = document.querySelector("#playerTwoBtn");
const resetBtn = document.querySelector("#resetBtn");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

playerOneBtn.addEventListener("click", (e) => {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      scoreOne.classList.add("has-text-primary");
      scoreTwo.classList.add("has-text-danger");

      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
    scoreOne.textContent = p1Score;
  }
});

playerTwoBtn.addEventListener("click", (e) => {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      scoreTwo.classList.add("has-text-primary");
      scoreOne.classList.add("has-text-danger");

      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
    scoreTwo.textContent = p2Score;
  }
});

let resetGame = () => {
  isGameOver = false;

  p1Score = 0;
  p2Score = 0;

  scoreOne.textContent = p1Score;
  scoreTwo.textContent = p2Score;

  scoreOne.classList.remove("has-text-primary", "has-text-danger");
  scoreTwo.classList.remove("has-text-primary", "has-text-danger");

  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
};

playingTo.addEventListener("change", () => {
  winningScore = parseInt(playingTo.value);
  resetGame();
});

resetBtn.addEventListener("click", resetGame);
