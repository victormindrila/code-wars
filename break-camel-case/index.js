function solution(string) {
	const split = [];
	let splitIndex = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
			split.push(string.substring(splitIndex, i));
			splitIndex = i;
		}
		if (i === string.length - 1) {
			split.push(string.substring(splitIndex, i + 1));
		}
	}
	return split.join(' ');
}

module.exports = solution;
