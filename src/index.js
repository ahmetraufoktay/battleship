import "./style.css";
import { Player } from "./player";
import { twoPlayerMain } from "./table";

const body = document.querySelector("body");

const playerOne = new Player("human");
const playerTwo = new Player("human");

body.appendChild(twoPlayerMain);

export { playerOne, playerTwo };
