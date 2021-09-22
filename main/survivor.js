class Survivor {
  constructor(name) {
    this.name = name;
    this.woundCount = 0;
    this.actionCount = 3;
    this.inHandEquipmentCapacity = 2;
    this.reserveEquipmentCapacity = 3;
    this.inHandCapacity = 2;
    this.inHandEquipmentList = [];
    this.reserveEquipmentList = [];
    this.isAlive = true;
  }

  getName() {
    return this.name;
  }

  getWoundCount() {
    return this.woundCount;
  }

  checkEquipmentWithinCapacity() {
    if (this.getEquipmentNumber() >= this.getEquipmentCapacity()) {
      this.reserveEquipmentList.pop();
    }
  }

  getsWounded(num) {
    this.woundCount += num;

    if (this.woundCount >= 2) {
      this.woundCount = 2;
      this.isAlive = false;
    }

    this.reserveEquipmentCapacity--;
    this.checkEquipmentWithinCapacity();
  }

  getActionCount() {
    return this.actionCount;
  }

  getEquipmentCapacity() {
    return this.inHandEquipmentCapacity + this.reserveEquipmentCapacity;
  }

  getInHandCapacity() {
    return this.inHandCapacity;
  }

  getEquipmentNumber() {
    return this.getInHandEquipment().length + this.getReserveEquipment().length;
  }

  checkIsAlive() {
    return this.isAlive;
  }

  performsActions(num) {
    this.actionCount -= num;
  }

  //total 5 p. 2p in hands with 3p
  //takes parameter equipment we want to change (replace());
  //count final total 5 p
  choosesEquipment(equipment) {
    if (
      equipment.length +
        this.inHandEquipmentList.length +
        this.reserveEquipmentList.length >
      this.getEquipmentCapacity()
    ) {
      throw "You have exceeded your equipment capacity";
    } else {
      for (let i = 0; i < equipment.length; i++) {
        if (this.inHandEquipmentList.length < this.inHandCapacity) {
          this.inHandEquipmentList.push(equipment[i]);
        } else if (
          this.reserveEquipmentList.length < this.reserveEquipmentCapacity
        ) {
          this.reserveEquipmentList.push(equipment[i]);
        }
      }
    }
  }

  getInHandEquipment() {
    return this.inHandEquipmentList;
  }

  getReserveEquipment() {
    return this.reserveEquipmentList;
  }
}

module.exports = Survivor;
