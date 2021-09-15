class Survivor {
  constructor(name) {
    this.name = name;
    this.woundCount = 0;
    this.actionCount = 3;
    this.inHandEquipmentCapacity = 2
    this.reserveEquipmentCapacity = 3
    this.inHandCapacity = 2;
    this.inHandEquipmentList = [];
    this.reserveEquipmentList = [];
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

  getActionCount() {
    return this.actionCount;
  }

  getEquipmentCapacity() {
    return this.equipmentCapacity;
  }

  getInHandCapacity() {
    return this.inHandCapacity;
  }

  isDead() {
    return this.woundCount === 2;
  }

  performsActions(num) {
    this.actionCount -= num;
  }

  choosesEquipment(equipment) {
    if (equipment.length + this.equipmentList.length > this.equipmentCapacity) {
      throw "You have exceeded your equipment capacity";
    } else {
      this.equipmentList = [this.equipmentList, ...equipment];
    }
  }

  getInHandEquipment() {

  }

  getReserveEquipment() {

  }
}

module.exports = Survivor;
