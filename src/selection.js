import { loadSquares } from "./table";
import { tableMain } from "./table";
import { playerTwoDiv } from "./table";
import { playerOne } from ".";

const selectionMenu = document.createElement("main");
selectionMenu.id = "selectionMenu";
const playerOneDiv = document.createElement("div");
playerOneDiv.id = "playerOne";

loadSquares(playerOneDiv);

selectionMenu.appendChild(playerOneDiv);

playerOneDiv.addEventListener("mouseover", mouseOver);

function mouseOver(event) {
  const element = event.target;
  let x = parseInt(element.dataset.x, 10);
  let y = parseInt(element.dataset.y, 10);
  element.addEventListener("click", removeListeners);
  playerOne.gameboard.place(y, x, 5, "yatay");
  playerOne.gameboard.map.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value === 1) {
        const tile = document.querySelector(
          `.tile[data-x="${colIndex}"][data-y="${rowIndex}"]`,
        );
        tile.style.backgroundColor = "blue";
      }
    });
  });
}

function removeListeners() {
  playerOneDiv.removeEventListener("mouseover", mouseOver);
  playerOneDiv.removeEventListener("mouseout", mouseOut);
  playerOneDiv.removeEventListener("click", removeListeners);
}

playerOneDiv.addEventListener("mouseout", mouseOut);

function mouseOut(event) {
  const element = event.target;
  let x = parseInt(element.dataset.x, 10);
  let y = parseInt(element.dataset.y, 10);
  let testval = x,
    dx = 1,
    dy = 0;
  if (testval + 4 < 10) {
    for (let i = 0; i < 5; i++) {
      const tile = document.querySelector(
        `.tile[data-x="${x + dx * i}"][data-y="${y + dy * i}"]`,
      );
      if (tile.classList.contains("placed")) {
        tile.style.backgroundColor = "";
        tile.classList.remove("placed");
      }
    }
  }
  playerOne.gameboard.remove(y, x, 5, "yatay");
  playerOne.gameboard.map.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value === 0) {
        const tile = document.querySelector(
          `.tile[data-x="${colIndex}"][data-y="${rowIndex}"]`,
        );
        tile.style.backgroundColor = "";
      }
    });
  });
}

/*
  tableMain.appendChild(playerOneDiv);
  tableMain.appendChild(playerTwoDiv);
  const body = document.querySelector("body");
  body.removeChild(selectionMenu);
  body.appendChild(tableMain);
*/

export { selectionMenu, tableMain };
