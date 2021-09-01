class Survivor {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	getWoundCount() {
		return 0;
	}

	isDead() {
		return true;
	}
}

module.exports = Survivor;
