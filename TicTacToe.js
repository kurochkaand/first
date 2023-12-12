const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessage = document.getElementById("winning-message");
const restartButt = document.getElementById("restart-button");
let circleTurn;
const winMessageText = document.querySelector("[data-winning-message-text]");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startOfGame();

function startOfGame() {
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  circleTurn = false;
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessage.classList.add("show");
    winMessageText.innerText = "It's a draw";
  } else {
    winMessageText.innerText = circleTurn ? "O wins" : "X wins";
    winningMessage.classList.add("show");
  }
  restartButt.addEventListener("click", restarting);
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurns() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS);
}

function checkWin(currentClass) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function restarting() {
  circleTurn = true;
  winningMessage.classList.remove("show");
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
  });
  cellElements.forEach((cell) => {
    cell.classList.remove(CIRCLE_CLASS);
  });
  startOfGame();
}
