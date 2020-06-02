function validParentheses(parens) {
	console.log(parens);
	const arr = parens.split('');
	const result = clearPairs(arr);
	console.log('result', result);
	if (result.length !== 0) return false;
	return true;
}

function clearPairs(arr) {
	let deletions = 0;
	arr.map((el, i) => {
		if (el === ')' && arr[i - 1] === '(') {
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

validParentheses(')()()()(');

module.exports = validParentheses;

/*
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

  × )()()()(       => false
  × (()()))(       => false
  × )()(            => false
  × ())(()          => false
  × ())(()          => false

*/
