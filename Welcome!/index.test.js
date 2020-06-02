const greet = require('./index');

test('English', () => {
	expect(greet('english')).toMatch(/Welcome/);
});

test('Dutch', () => {
	expect(greet('dutch')).toMatch(/Welkom/);
});

test('IP_ADDRESS_INVALID', () => {
	expect(greet('IP_ADDRESS_INVALID')).toMatch(/Welcom/);
});
