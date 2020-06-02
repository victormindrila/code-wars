test(`{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}`, () => {
	expect(list([ { name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' } ])).toBe(
		'Bart, Lisa, Maggie, Homer & Marge'
	);
});

test(`[{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]`, () => {
	expect(list([ { name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' } ])).toBe('Bart, Lisa & Maggie');
});

test(`[{name: 'Bart'}]`, () => {
	expect(list([ { name: 'Bart' } ])).toBe('Bart');
});

test(`[]`, () => {
	expect(list([])).toBe('');
});

const list = require('./index');
