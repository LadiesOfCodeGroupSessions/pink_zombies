const Game = require("../main/game");
const Survivor = require("../main/survivor");

test("game starts with 0 survivors", () => {
	let game = new Game();
	expect(game.getNumberOfSurvivors()).toBe(0);
});

test("survivor can be added to game", () => {
	let game = new Game();
	const survivor = new Survivor("Emma");

	game.addSurvivor(survivor);

	expect(game.survivors.includes(survivor)).toBe(true);
});

test("game survivor count increases when survivor is added to game", () => {
	let game = new Game();
	const survivor = new Survivor("Emma");

	game.addSurvivor(survivor);

	expect(game.getNumberOfSurvivors()).toBe(1);
});

test("when a survivor is added check the name is unique", () => {
	let game = new Game();
	const survivor = new Survivor("Emma");
	game.addSurvivor(survivor);
	const secondSurvivor = new Survivor("Emma");

	expect(() => game.addSurvivor(secondSurvivor)).toThrow(
		"Must be a unique name"
	);
});
