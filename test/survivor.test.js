const Survivor = require("../main/survivor");

test("each survivor has a name", () => {
    let survivor = new Survivor("Emma")
    expect(survivor.getName()).toEqual("Emma");
});