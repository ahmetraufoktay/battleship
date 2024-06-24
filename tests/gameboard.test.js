import { Gameboard } from "./gameboard";

test("Place ships in a coordinate", () => {
  const myBoard = new Gameboard();
  myBoard.place(3, 3, 3, "dikey");
  expect(myBoard.map[3][3]).toBe(1);
  expect(myBoard.map[4][3]).toBe(1);
  expect(myBoard.map[5][3]).toBe(1);
});

test("No collisions on placing ships", () => {
  const myBoard = new Gameboard();
  myBoard.place(3, 3, 3, "dikey");
  myBoard.place(4, 3, 3, "yatay");
  expect(myBoard.map[4][4]).toBe(0);
  expect(myBoard.map[4][5]).toBe(0);
});

test("Receives attacks", () => {
  const myBoard = new Gameboard();
  myBoard.place(3, 3, 3, "dikey");
  myBoard.receiveAttack(3, 3);
  expect(myBoard.map[3][3]).toBe(-1);
});

test("Records attacks", () => {
  const myBoard = new Gameboard();
  myBoard.place(3, 3, 3, "dikey");
  myBoard.receiveAttack(2, 2);
  expect(myBoard.map[2][2]).toBe(2);
});

test("All ships sunk", () => {
  const myBoard = new Gameboard();
  myBoard.place(1, 1, 1, "dikey");
  myBoard.place(3, 1, 1, "dikey");
  myBoard.receiveAttack(1, 1);
  myBoard.receiveAttack(3, 1);
  expect(myBoard.over()).toBe(true);
});
