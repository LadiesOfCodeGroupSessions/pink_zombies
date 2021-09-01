const Survivor = require("../main/survivor");

test("each survivor has a name", () => {
    let survivor = new Survivor("Emma")

    expect(survivor.getName()).toEqual("Emma");
});

test("each survivor has a name", () => {
    let survivor1 = new Survivor("Emma")
    let survivor2 = new Survivor("Bob")

    expect(survivor1.getName()).toEqual("Emma");
    expect(survivor2.getName()).toEqual("Bob");
});