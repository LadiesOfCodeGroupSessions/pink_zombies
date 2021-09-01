class Survivor {
	constructor(name) {
		this.name = name;
		this.woundCount= 0;
	}

	getName() {
		return this.name;
	}

	getWoundCount() {
console.log(this.woundCount);
		return this.woundCount;
	}

	getsWounded(num){
		this.woundCount += num
		console.log(this.woundCount, typeof(this.woundCount));

	}

	isDead() {
		if(this.woundCount ==2 ){
			return true;
		}
		return false;
	}


}

module.exports = Survivor;
