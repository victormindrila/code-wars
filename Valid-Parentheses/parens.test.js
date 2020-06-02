const validParentheses = require('./index');

test('()', () => {
	expect(validParentheses('()')).toBe(true);
});

test('())', () => {
	expect(validParentheses('())')).toBe(false);
});

test(')(()))', () => {
	expect(validParentheses(')(()))')).toBe(false);
});

test('(', () => {
	expect(validParentheses('(')).toBe(false);
});

test('(())((()())())', () => {
	expect(validParentheses('(())((()())())')).toBe(true);
});

test(')()()()(', () => {
	expect(validParentheses(')()()()(')).toBe(false);
});

test('(()()))(', () => {
	expect(validParentheses('(()()))(')).toBe(false);
});

test(')()(', () => {
	expect(validParentheses(')()(')).toBe(false);
});

test('())(()', () => {
	expect(validParentheses('())(()')).toBe(false);
});

test('())(()', () => {
	expect(validParentheses('())(()')).toBe(false);
});

/*
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/
