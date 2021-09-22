const Game = require("../main/game");

test("game starts with 0 survivors", () => {
	let game = new Game();
	expect(game.getNumberOfSurvivors()).toBe(0);
});
