import { Ship } from "./ship";

test("Increases hits", () => {
  const myShip = new Ship(3);
  myShip.hit();
  expect(myShip.timesHit).toBe(1);
});

test("Sunks the Ship", () => {
  const myShip = new Ship(2);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});

test("Does not allow hit count to surpass length", () => {
  const myShip = new Ship(2);
  myShip.hit();
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.timesHit).toBe(2);
});
