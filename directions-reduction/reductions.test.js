const dirReduc = require('./index');

test('"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"', () => {
	expect(dirReduc([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ])).toEqual(
		expect.arrayContaining([ 'WEST' ])
	);
});

test("'NORTH', 'WEST', 'SOUTH', 'EAST'", () => {
	expect(dirReduc([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ])).toEqual(
		expect.arrayContaining([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ])
	);
});

test("'NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST' ", () => {
	expect(dirReduc([ 'NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST' ])).toEqual(expect.arrayContaining([]));
});

/*
Test.assertSimilar(dirReduc([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ]), [ 'WEST' ]);
Test.assertSimilar(dirReduc([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]), [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]);
Test.assertSimilar(dirReduc([ 'NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST' ]), []);
*/
