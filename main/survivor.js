class Survivor {
  constructor(name) {
    this.name = name;
    this.woundCount = 0;
    this.actionCount = 3;
    this.equipmentCapacity = 5;
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

  performsActions(num) {
    this.actionCount -= num;
  }

  getActionCount() {
    return this.actionCount;
  }

  getEquipmentCapacity() {
    return this.equipmentCapacity;
  }
}

module.exports = Survivor;
