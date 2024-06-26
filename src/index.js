import "./style.css";
import { Gameboard } from "./gameboard";

const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");

function createSquare(x, y) {
  const block = document.createElement("div");
  block.classList = "tile";
  block.setAttribute("data-x", x);
  block.setAttribute("data-y", y);
  return block;
}

function loadSquares(player) {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const myblock = createSquare(i, j);
      player.appendChild(myblock);
    }
  }
}

loadSquares(playerOne);
loadSquares(playerTwo);
