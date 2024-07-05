import "./style.css";
import { selectionMenu, playerOneDiv } from "./selection";
import { nameMenu } from "./start";
import { playerOne, playerTwo, playerTwoDiv } from "./table";
const body = document.querySelector("body");

let name;
body.appendChild(nameMenu);
const startButton = document.getElementById("nameButton");
startButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  if (nameInput.value.length > 18) {
    nameInput.value = "";
    nameInput.placeholder = "MAXIMUM 18 CHARS";
  } else if (nameInput.value == "") {
    nameInput.placeholder = "INSERT NAME";
  } else {
    name = nameInput.value;
    body.removeChild(nameMenu);
    body.appendChild(selectionMenu);
  }
});
startGame();
function startGame() {
  const interval = setInterval(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) {
      console.error("Main element not found");
      clearInterval(interval);
      return;
    }
    if (mainElement.id === "tableMain") {
      clearInterval(interval);
      console.log("Game Started");
      playerTwoDiv.addEventListener("click", playGame);
    }
  }, 1000);
}
let memory = [];
let root = [];
let mdirX = [-1, 1, 0, 0];
let mdirY = [0, 0, -1, 1];
let dirIndex = 0;
function playGame(event) {
  if (!event.target || event.target.style.backgroundColor != "") return;
  attackPTWO(event.target);
  let target, y, x;
  let memoryStatus = memory.length == 2;
  if (memory.length == 2) {
    [y, x] = memory;
    target = [y, x];
    memoryStatus = true;
  } else {
    [y, x] = chooseFreeSpaces(playerOne);
    target = [y, x];
  }

  attackPONE(target);

  const sunkStatus = checkSunking(y, x, playerOne, playerOneDiv);
  if (sunkStatus) {
    memory = [];
    root = [];
    return;
  }
  if (!memoryStatus && playerOne.gameboard.map[y][x] == -1) {
    root = [y, x];
    updateMemory(y, x);
  } else if (memoryStatus) {
    if (isInvalidMove(y, x)) {
      [y, x] = root;
      dirIndex = (dirIndex + 1) % 4;
    }
    updateMemory(y, x);
  }
}
function attackPONE(target) {
  let [dataY, dataX] = target;
  const element = playerOneDiv.querySelector(
    `.tile[data-x="${dataX}"][data-y="${dataY}"]`,
  );
  playerOne.gameboard.receiveAttack(dataY, dataX);
  const tileStatus = playerOne.gameboard.map[dataY][dataX];
  element.style.backgroundColor = tileStatus == -1 ? "red" : "gray";
  if (playerOne.gameboard.over()) {
    gameOver("two");
    return;
  }
}
function attackPTWO(target) {
  let dataX = target.getAttribute("data-x");
  let dataY = target.getAttribute("data-y");
  playerTwo.gameboard.receiveAttack(dataY, dataX);
  const tileStatus = playerTwo.gameboard.map[dataY][dataX];
  target.style.backgroundColor = tileStatus == -1 ? "blue" : "gray";
  checkSunking(dataY, dataX, playerTwo, playerTwoDiv);
  if (playerTwo.gameboard.over()) {
    gameOver("one");
    return;
  }
}
function chooseFreeSpaces(player) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  while (player.gameboard.map[y][x] == 2 || player.gameboard.map[y][x] == -1) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }
  return [y, x];
}
function updateMemory(y, x) {
  let newy, newx;
  for (let i = 0; i < 4; i++) {
    dirIndex = (dirIndex + i) % 4;
    newy = y + mdirY[dirIndex];
    newx = x + mdirX[dirIndex];
    if (isValidMove(newy, newx)) {
      memory = [newy, newx];
      break;
    }
  }
}
function checkSunking(y, x, player, playerdiv) {
  const ship = player.gameboard.ships.find((ship) =>
    ship.coordinates.some((coord) => coord[0] == y && coord[1] == x),
  );
  if (ship && ship.isSunk()) {
    for (let i = 0; i < ship.coordinates.length; i++) {
      let [y, x] = ship.coordinates[i];
      const tile = playerdiv.querySelector(
        `.tile[data-x="${x}"][data-y="${y}"]`,
      );
      tile.style.backgroundColor = "red";
    }
    return true;
  }
  return false;
}

function isValidMove(y, x) {
  return (
    y >= 0 &&
    y < 10 &&
    x >= 0 &&
    x < 10 &&
    playerOne.gameboard.map[y][x] != -1 &&
    playerOne.gameboard.map[y][x] != 2
  );
}

function isInvalidMove(y, x) {
  return (
    y < 0 || y >= 10 || x < 0 || x >= 10 || playerOne.gameboard.map[y][x] == 2
  );
}

function gameOver(player) {
  let winner = player == "one" ? name.toUpperCase() : "COMPUTER";
  playerTwoDiv.removeEventListener("click", playGame);
  const winnerName = document.getElementById("winner");
  winnerName.innerText = `${winner} WON`;
  const modal = document.getElementById("modal");
  modal.showModal();
}
export { name };
