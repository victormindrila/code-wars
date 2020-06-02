const SubtractSum = require('./index');

test('test 10', () => {
	expect(SubtractSum(10)).toMatch(/apple/);
});

test('test 15', () => {
	expect(SubtractSum(15)).toMatch(/apple/);
});

test('test 55', () => {
	expect(SubtractSum(55)).toMatch(/apple/);
});

test('test 325', () => {
	expect(SubtractSum(325)).toMatch(/apple/);
});
