class Game {
  constructor() {
    this.numberOfSurvivors = 0;
    this.survivors = [];
  }

  addSurvivor(survivor) {
    this.numberOfSurvivors++;
    this.survivors = [...this.survivors, survivor];
  }

  getNumberOfSurvivors() {
    return this.numberOfSurvivors;
  }
}

module.exports = Game;
