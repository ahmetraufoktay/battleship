import { loadSquares } from "./table";
import { tableMain } from "./table";
import { playerTwoDiv } from "./table";
import { playerOne } from "./table";
import { name } from ".";
//selection menu
const selectionMenu = document.createElement("main");
selectionMenu.id = "selectionMenu";
//player one table
const playerOneDiv = document.createElement("div");
playerOneDiv.id = "playerOne";
// ship settings menu
const shipSettings = document.createElement("div");
shipSettings.id = "shipSettings";

loadSquares(playerOneDiv);

selectionMenu.appendChild(shipSettings);
selectionMenu.appendChild(playerOneDiv);

// direction selection Button
const directionButton = document.createElement("button");
directionButton.id = "changeDirection";
shipSettings.appendChild(directionButton);
//inital direction
let dir = "yatay";
let currentDirection = dir === "yatay" ? "X" : "Y";
directionButton.textContent = `Direction: ${currentDirection}`;

directionButton.addEventListener("click", () => {
  dir = dir === "yatay" ? "dikey" : "yatay";
  currentDirection = dir === "yatay" ? "X" : "Y";
  directionButton.textContent = `Direction: ${currentDirection}`;
});
//block placing function
async function placeBlock(len) {
  return new Promise((resolve) => {
    let blockInProgress = false; // to prevent removing blocks that were already placed

    playerOneDiv.addEventListener("mouseover", mouseOver);

    function mouseOver(event) {
      if (blockInProgress) return;

      const element = event.target;
      let x = parseInt(element.dataset.x, 10);
      let y = parseInt(element.dataset.y, 10);

      if (playerOne.gameboard.place(y, x, len, dir)) {
        blockInProgress = true; // state that this block is in progress to prevent removing it
        updateBoard();
        element.addEventListener("click", confirmPlacement);
      }
    }

    function confirmPlacement(event) {
      // finish the process and remove event listeners when clicked
      playerOneDiv.removeEventListener("mouseover", mouseOver);
      playerOneDiv.removeEventListener("mouseout", mouseOut);
      event.target.removeEventListener("click", confirmPlacement);
      blockInProgress = false;
      resolve();
    }

    function mouseOut(event) {
      if (!blockInProgress) return;
      // if the block is in progress you can safely remove it otherwise that means block is placed thus you cant remove it
      const element = event.target;
      let x = parseInt(element.dataset.x, 10);
      let y = parseInt(element.dataset.y, 10);

      if (playerOne.gameboard.remove(y, x, len, dir)) {
        blockInProgress = false;
        updateBoard();
      }
    }

    playerOneDiv.addEventListener("mouseout", mouseOut);

    function updateBoard() {
      playerOne.gameboard.map.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
          const tile = playerOneDiv.querySelector(
            `.tile[data-x="${colIndex}"][data-y="${rowIndex}"]`,
          );
          tile.style.backgroundColor = value == 1 ? "#abd079" : "";
        });
      });
    }
  });
}

(async function () {
  await placeBlock(5);
  await placeBlock(4);
  await placeBlock(3);
  await placeBlock(3);
  await placeBlock(2);
  await setTimeout(() => {
    const containerOne = document.createElement("div");
    containerOne.id = "container";
    const nameOne = document.createElement("div");
    nameOne.innerText = `CAPTAIN ${name.toUpperCase()}`;
    nameOne.id = "nameOne";
    containerOne.appendChild(nameOne);
    containerOne.appendChild(playerOneDiv);
    const containerTwo = document.createElement("div");
    containerTwo.id = "container";
    const nameTwo = document.createElement("div");
    nameTwo.innerText = "COMPUTER";
    nameTwo.id = "nameTwo";
    containerTwo.appendChild(nameTwo);
    containerTwo.appendChild(playerTwoDiv);
    tableMain.appendChild(containerOne);
    tableMain.appendChild(containerTwo);
    const body = document.querySelector("body");
    body.removeChild(selectionMenu);
    body.appendChild(tableMain);
  }, 250);
})();

export { selectionMenu, tableMain, playerOneDiv };
