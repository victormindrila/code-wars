function order(words) {
	if (words.length === 0) return '';

	const wordsArr = words.split(' ');
	const orderedArr = new Array(wordsArr.length);
	wordsArr.forEach((word) => {
		const order = word.match(/(\d+)/)[0];
		orderedArr[order - 1] = word;
	});
	return orderedArr.join(' ');
}

module.exports = order;
