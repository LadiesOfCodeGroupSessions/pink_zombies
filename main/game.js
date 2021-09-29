class Game {
	constructor() {
		this.numberOfSurvivors = 0;
		this.survivors = [];
	}

	addSurvivor(newSurvivor) {
		this.survivors.forEach((survivor) => {
			if (survivor.name === newSurvivor.name) {
				throw "Must be a unique name";
			}
		});

		this.numberOfSurvivors++;
		this.survivors = [...this.survivors, newSurvivor];
	}

	getNumberOfSurvivors() {
		return this.numberOfSurvivors;
	}

	isRunning() {
		return this.anyLivingSurvivors();
	}

	anyLivingSurvivors() {
		var returnVal = false

		this.survivors.forEach((survivor) => {
			console.log("in anyLivingSurvivors: ", survivor.checkIsAlive());
			if(survivor.checkIsAlive()){
				returnVal = true
			}
		});

		return returnVal


		// for (var i =0; i < this.survivors.length; i++) {
		// 	var survivor = this.survivors[i]
		// 	console.log("in anyLivingSurvivors: ", survivor.checkIsAlive());
		// 	if (survivor.checkIsAlive() === true) {
		// 		console.log("HERERERER")
		// 		return true;
		// 	}
		// }
		//
		// return false;


		// for (var i = 0; i < SomeArrayOfObject.length; i++)
	}
}

module.exports = Game;
