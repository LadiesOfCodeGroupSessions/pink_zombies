const Survivor = require("../main/survivor");

test("each survivor has a name", () => {
	let survivor = new Survivor("Emma");

	expect(survivor.getName()).toEqual("Emma");
});

test("each survivor has a name", () => {
	let survivor1 = new Survivor("Emma");
	let survivor2 = new Survivor("Bob");

	expect(survivor1.getName()).toEqual("Emma");
	expect(survivor2.getName()).toEqual("Bob");
});

test("each survivor begins with zero wounds", () => {
	let survivor = new Survivor("Emma");

	expect(survivor.getWoundCount()).toEqual(0);
});

test("a survivor dies if they have 2 wounds", () => {
	let survivor = new Survivor("Emma");
	survivor.getsWounded(2);
	expect(survivor.isDead()).toEqual(true);
});

test("the survivor does not die if theyhave only 1 wound",()=>{
	let survivor = new Survivor("Emma");
	survivor.getsWounded(1)

	expect(survivor.isDead()).toEqual(false);
})

test("additional wounds are ignored after death", () =>{
	let survivor = new Survivor("Emma");
	survivor.getsWounded(3);
	expect(survivor.getWoundCount()).toBe(2)

})
