const isPangram = require('./index');

var string1 = 'The quick brown fox jumps over the lazy dog.';
test('The quick brown fox jumps over the lazy dog.', () => {
	expect(isPangram(string1)).toBe(true);
});
var string2 = 'This is not a pangram.';
test('This is not a pangram.', () => {
	expect(isPangram(string2)).toBe(false);
});
