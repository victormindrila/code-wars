const solution = require('./index');

test('camelCasing', () => {
	expect(solution('camelCasing')).toBe('camel Casing');
});

test('camelCasingTest', () => {
	expect(solution('camelCasingTest')).toBe('camel Casing Test');
});
