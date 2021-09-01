class Survivor {
  constructor(name) {
    this.name = name;
    this.woundCount = 0;
  }

  getName() {
    return this.name;
  }

  getWoundCount() {
    console.log(this.woundCount);
    return this.woundCount;
  }

  getsWounded(num) {
    this.woundCount += num;
    if (this.woundCount >= 2) {
      this.woundCount = 2;
    }
  }

  isDead() {
    if (this.woundCount == 2) {
      return true;
    }
    return false;
  }

  performsActions(ActionCount) {

  }

  getActionCount() {
    return 0;
  }
}

module.exports = Survivor;
