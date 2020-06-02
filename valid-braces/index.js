function validBraces(braces) {
	const arr = braces.split('');
	const result = clearPairs(arr);
	if (result.length !== 0) return false;
	return true;
}

function clearPairs(arr) {
	let deletions = 0;
	const isCloseParens = (el) => [ ')', '}', ']' ].some((item) => item === el);
	arr.map((el, i) => {
		if (isCloseParens(el) && arr[i - 1] === getOpposite(el)) {
			arr.splice(i - 1, 2);
			deletions += 1;
		}
	});

	if (!deletions) {
		return arr;
	} else {
		deletions = 0;
		return clearPairs(arr);
	}
}

function getOpposite(parens) {
	switch (parens) {
		case ')':
			return '(';
			break;
		case '}':
			return '{';
			break;
		case ']':
			return '[';
			break;
		default:
			break;
	}
}
