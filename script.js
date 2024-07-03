
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = Array(9).fill(null);
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if (gameState[index] || checkWinner()) return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  
  if (checkWinner()) {
    alert(`${currentPlayer} wins!`);
    return;
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      return true;
    }
  }
  return false;
}
