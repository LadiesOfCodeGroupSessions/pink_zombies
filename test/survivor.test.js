const Survivor = require("../main/survivor");

test("each survivor has a name", () => {
  const survivor = new Survivor("Emma");

  expect(survivor.getName()).toEqual("Emma");
});

test("each survivor has a name", () => {
  const survivor1 = new Survivor("Emma");
  const survivor2 = new Survivor("Bob");

  expect(survivor1.getName()).toEqual("Emma");
  expect(survivor2.getName()).toEqual("Bob");
});

test("each survivor begins with zero wounds", () => {
  const survivor = new Survivor("Emma");

  expect(survivor.getWoundCount()).toEqual(0);
});

test("a survivor dies if they have 2 wounds", () => {
  const survivor = new Survivor("Emma");
  survivor.getsWounded(2);
  expect(survivor.checkIsAlive()).toEqual(false);
});

test("the survivor does not die if theyhave only 1 wound", () => {
  const survivor = new Survivor("Emma");
  survivor.getsWounded(1);

  expect(survivor.checkIsAlive()).toEqual(true);
});

test("additional wounds are ignored after death", () => {
  const survivor = new Survivor("Emma");
  survivor.getsWounded(3);
  expect(survivor.getWoundCount()).toBe(2);
});

// //Each Survivor starts with the ability to perform 3 Actions per turn.
// test("survivor starts with 3 actions per turn", () =>{
// 	const survivor1 = new Survivor("Emma");
// 	const survivor2 = new Survivor("Bob");
//
// 	allSurvivors = [survivor1, survivor2]
//
// 	survivors = new Survivors(allSurvivors)
//
// 	expect(survivor1.getActionCount()).toEqual(3)
//
// 	survivor.performsActions(3)
//
// 	expect(survivor.getActionCount()).toEqual(0)
//
// 	survivors.resetActions()
//
// 	expect(survivor1.getActionCount()).toEqual(3)
// })

test("survivor starts with 3 actions per turn", () => {
  const survivor = new Survivor("Emma");
  survivor.performsActions(3);
  expect(survivor.getActionCount()).toBe(0);
});

test("survivor starts with 3 actions per turn", () => {
  const survivor = new Survivor("Emma");
  expect(survivor.getActionCount()).toBe(3);
});

test("survivor capacity of equipment is 5", () => {
  const survivor = new Survivor("Emma");
  expect(survivor.getEquipmentCapacity()).toBe(5);
});

test("survivor starts with ability to carry up to 2 pieces of equipment in hand", () => {
  const survivor = new Survivor("Emma");
  expect(survivor.getInHandCapacity()).toBe(2);
});

test("survivor can't carry more than 5 pieces of equipment", () => {
  const survivor = new Survivor("Emma");
  expect(() =>
    survivor.choosesEquipment([
      "Baseball bat",
      "Frying pan",
      "Katana",
      "Pistol",
      "Bottled Water",
      "Molotov",
    ])
  ).toThrow("You have exceeded your equipment capacity");
});

test("test 2 are in hand and 3 are in reserve", () => {
  const survivor = new Survivor("Emma");

  survivor.choosesEquipment([
    "Baseball bat",
    "Frying pan",
    "Katana",
    "Pistol",
    "Bottled Water",
  ]);

  expect(survivor.getInHandEquipment().length).toBe(2);
  expect(survivor.getReserveEquipment().length).toBe(3);
});

test("test 2 are in hand and 3 are in reserve", () => {
  const survivor = new Survivor("Emma");

  survivor.choosesEquipment([
    "Baseball bat",
    "Frying pan",
    "Katana",
    "Pistol",
    "Bottled Water",
  ]);

  expect(survivor.getInHandEquipment().length).toBe(2);
  expect(survivor.getReserveEquipment().length).toBe(3);
});

test("the survivor receives 1 wound, reduces equipment capacity", () => {
  const survivor = new Survivor("Emma");
  survivor.choosesEquipment([
    "Baseball bat",
    "Frying pan",
    "Katana",
    "Pistol",
    "Bottled Water",
  ]);

  survivor.getsWounded(1);

  expect(survivor.getEquipmentCapacity()).toBe(4);
});

test("if the survivor has more equipment than capacity, piece is discarded", () => {
  const survivor = new Survivor("Emma");

  survivor.choosesEquipment([
    "Baseball bat",
    "Frying pan",
    "Katana",
    "Pistol",
    "Bottled Water",
  ]);

  survivor.getsWounded(1);

  expect(survivor.getEquipmentNumber() <= survivor.getEquipmentCapacity()).toBe(
    true
  );
});
