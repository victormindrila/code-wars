function digital_root(n) {
	const sum = arrayOfDigits(n).reduce((acc, el) => (acc = acc + el), 0);
	while (sum >= 10) {
		return digital_root(sum);
	}
	return sum;
}

function arrayOfDigits(n) {
	const arr = [];
	while (n > 0) {
		arr.push(n % 10);
		n = Math.floor(n / 10);
	}
	return arr.reverse();
}

module.exports = digital_root;
