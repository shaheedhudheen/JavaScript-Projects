const p1 = {
  score: 0,
  button: document.querySelector("#playerOneBtn"),
  scoreDisplay: document.querySelector("#scoreOne"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#playerTwoBtn"),
  scoreDisplay: document.querySelector("#scoreTwo"),
};

const playingTo = document.querySelector("#playTo");
const resetBtn = document.querySelector("#resetBtn");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.scoreDisplay.classList.add("has-text-primary");
      opponent.scoreDisplay.classList.add("has-text-danger");

      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.scoreDisplay.textContent = player.score;
  }
}

p1.button.addEventListener("click", (e) => {
  updateScore(p1, p2);
});

playerTwoBtn.addEventListener("click", (e) => {
  updateScore(p2, p1);
});

let resetGame = () => {
  isGameOver = false;

  for (p of [p1, p2]){
    p.score = 0;
    p.scoreDisplay.textContent = 0;
    p.scoreDisplay.classList.remove("has-text-primary", "has-text-danger");
    p.button.disabled = false;
  }
};

playingTo.addEventListener("change", () => {
  winningScore = parseInt(playingTo.value);
  resetGame();
});

resetBtn.addEventListener("click", resetGame);
