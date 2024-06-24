class Gameboard {
  constructor() {
    this.map = Array.from({ length: 10 }, () => Array(10).fill(0));
  }
  // (y,x) = coordinates, len = length, dir = direction
  place(y, x, len, dir) {
    const dx = dir === "yatay" ? 1 : 0;
    const dy = dir === "dikey" ? 1 : 0;

    if ((dx && x + len > 10) || (dy && y + len > 10)) {
      return;
    }

    for (let i = 0; i < len; i++) {
      if (this.map[y + i * dy][x + i * dx] !== 0) {
        return;
      }
    }

    for (let i = 0; i < len; i++) {
      this.map[y + i * dy][x + i * dx] = 1;
    }
  }
  receiveAttack(y, x) {
    switch (this.map[y][x]) {
      case 0:
        this.map[y][x] = 2;
        break;
      case 1:
        this.map[y][x] = -1;
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