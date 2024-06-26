import { playerOne } from "./index";
import { playerTwo } from "./index";

const twoPlayerMain = document.createElement("main");

const playerOneDiv = document.createElement("div");
playerOneDiv.id = "playerOne";
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

playerTwoDiv.addEventListener("click", (event) => {
  const element = event.target;
  const datax = element.getAttribute("data-x");
  const datay = element.getAttribute("data-y");

  if (playerTwo.gameboard.map[datay][datax] === 1) {
    element.style.backgroundColor = "blue";
  } else if (playerTwo.gameboard.map[datay][datax] === 0) {
    element.style.backgroundColor = "gray";
  }
  playerTwo.gameboard.receiveAttack(datay, datax);

  if (playerTwo.gameboard.over()) {
    setTimeout(() => {
      alert("GAME OVER");
    }, 250);
  }
});

loadSquares(playerOneDiv);
loadSquares(playerTwoDiv);

twoPlayerMain.appendChild(playerOneDiv);
twoPlayerMain.appendChild(playerTwoDiv);

export { twoPlayerMain };
