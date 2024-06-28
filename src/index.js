import "./style.css";
import { Player } from "./player";
import { selectionMenu } from "./selection";
import { nameMenu } from "./start";
const body = document.querySelector("body");

const playerOne = new Player("human");
const playerTwo = new Player("human");

body.appendChild(nameMenu);
const startButton = document.getElementById("nameButton");
startButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  if (nameInput.value == "") {
    nameInput.placeholder = "INSERT NAME";
  } else {
    let name = nameInput.value;
    body.removeChild(nameMenu);
    body.appendChild(selectionMenu);
  }
});

export { playerOne, playerTwo };
