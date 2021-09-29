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
        return true;
    }

    anyLivingSurvivors(){
		this.survivors.forEach((survivor) => {
			if (survivor.checkIsAlive()) {
				return true
			}
		});
		return false;
	}
}

module.exports = Game;
