import { loadSquares } from "./table";

const playerOneDiv = document.createElement("div");
playerOneDiv.id = "playerOne";

loadSquares(playerOneDiv);

export { playerOneDiv };
