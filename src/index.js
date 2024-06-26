import "./style.css";
import { Player } from "./player";
import { tableMain } from "./table";
import { playerOneDiv } from "./selection";
import { nameMenu } from "./start";

const body = document.querySelector("body");

const playerOne = new Player("human");
const playerTwo = new Player("human");

body.appendChild(nameMenu);
const startButton = document.getElementById("nameButton");

export { playerOne, playerTwo };
