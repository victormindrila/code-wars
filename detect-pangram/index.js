function isPangram(string) {
	for (let i = 97; i <= 122; i++) {
		let letter = String.fromCharCode(i);
		if (!string.toLowerCase().includes(letter)) {
			return false;
		}
	}
	return true;
}

module.exports = isPangram;
