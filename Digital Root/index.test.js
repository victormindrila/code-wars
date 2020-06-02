const digital_root = require('./index');

test('digital root of 16', () => {
	expect(digital_root(16)).toBe(7);
});

test('digital root of 456', () => {
	expect(digital_root(456)).toBe(6);
});

test('digital root of 1', () => {
	expect(digital_root(1)).toBe(1);
});

test('digital root of 10', () => {
	expect(digital_root(10)).toBe(1);
});

test('digital root of 11', () => {
	expect(digital_root(11)).toBe(2);
});

test('digital root of 100', () => {
	expect(digital_root(100)).toBe(1);
});

test('digital root of 493193', () => {
	expect(digital_root(493193)).toBe(2);
});

test('digital root of 942', () => {
	expect(digital_root(942)).toBe(6);
});

test('digital root of 7777', () => {
	expect(digital_root(7777)).toBe(1);
});
