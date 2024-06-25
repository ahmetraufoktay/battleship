class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
    this.coordinates = [];
  }
  hit() {
    this.timesHit =
      this.length > this.timesHit ? this.timesHit + 1 : this.length;
  }
  isSunk() {
    this.sunk = this.timesHit === this.length ? true : false;
    return this.sunk;
  }
}

export { Ship };
