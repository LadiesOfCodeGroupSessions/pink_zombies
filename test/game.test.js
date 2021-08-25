const Game = require("../main/game");

test("game set-up", () => {
    let game = new Game()
    expect(game.getHello()).toBe("Hello");
});