import { Player } from "./player";
const playerOne = new Player("human");
const playerTwo = new Player("human");

const tableMain = document.createElement("main");
tableMain.id = "tableMain";

const playerTwoDiv = document.createElement("div");
playerTwoDiv.id = "playerTwo";

function createSquare(x, y) {
  const block = document.createElement("div");
  block.classList = "tile";

  block.setAttribute("data-x", x);
  block.setAttribute("data-y", y);
  return block;
}

function loadSquares(player) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const myblock = createSquare(j, i);
      player.appendChild(myblock);
    }
  }
}
function placeShips() {
  for (let i = 5; i > 0; i--) {
    let len = i;
    if (i == 1) {
      len = 3;
    }
    while (playerTwo.gameboard.ships.length !== 6 - i) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let direction = x % 2 == 0 ? "dikey" : "yatay";
      playerTwo.gameboard.place(y, x, len, direction);
    }
  }
  console.log(playerTwo.gameboard.map);
}

placeShips();

loadSquares(playerTwoDiv);

export { playerOne, playerTwo, playerTwoDiv, tableMain, loadSquares };
