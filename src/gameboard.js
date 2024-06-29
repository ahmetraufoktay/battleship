import { Ship } from "./ship";
class Gameboard {
  constructor() {
    this.map = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.ships = [];
  }
  // (y,x) = coordinates, len = length, dir = direction
  place(y, x, len, dir) {
    const dx = dir === "yatay" ? 1 : 0;
    const dy = dir === "dikey" ? 1 : 0;

    if ((dx && x + len > 10) || (dy && y + len > 10)) {
      return false;
    }

    for (let i = 0; i < len; i++) {
      if (this.map[y + i * dy][x + i * dx] !== 0) {
        return false;
      }
    }

    const ship = new Ship(len);

    for (let i = 0; i < len; i++) {
      this.map[y + i * dy][x + i * dx] = 1;
      ship.coordinates.push([y + i * dy, x + i * dx]);
    }
    this.ships.push(ship);
    return true;
  }
  remove(y, x, len, dir) {
    const dx = dir === "yatay" ? 1 : 0;
    const dy = dir === "dikey" ? 1 : 0;

    if ((dx && x + len > 10) || (dy && y + len > 10)) {
      return false;
    }

    for (let i = 0; i < len; i++) {
      if (this.map[y + i * dy][x + i * dx] !== 1) {
        return false;
      }
    }

    for (let i = 0; i < len; i++) {
      this.map[y + i * dy][x + i * dx] = 0;
    }

    const indexToRemove = this.ships.findIndex(
      (ship) => ship.coordinates[0][0] == y && ship.coordinates[0][1] == x,
    );
    this.ships.splice(indexToRemove, 1);
    return true;
  }
  receiveAttack(y, x) {
    switch (this.map[y][x]) {
      case 0:
        this.map[y][x] = 2;
        break;
      case 1:
        this.map[y][x] = -1;
        for (let ship of this.ships) {
          for (let coord of ship.coordinates) {
            if (coord[0] === y && coord[1] === x) {
              ship.hit();
            }
          }
        }
        break;
      case 2:
        return;
    }
  }
  over() {
    for (let row of this.map) {
      if (row.includes(1)) {
        return false;
      }
    }
    return true;
  }
}

export { Gameboard };
