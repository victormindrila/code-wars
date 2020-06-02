function dirReduc(arr) {
	let deletions = 0;
	arr.map((el, i) => {
		if (getOpposite(el) === arr[i - 1]) {
			arr.splice(i - 1, 2);
			deletions += 1;
		}
	});

	if (deletions) {
		return arr;
	} else {
		return dirReduc(arr);
	}
}

function getOpposite(direction) {
	switch (direction) {
		case 'NORTH':
			return 'SOUTH';
			break;
		case 'SOUTH':
			return 'NORTH';
			break;
		case 'WEST':
			return 'EAST';
			break;
		case 'EAST':
			return 'WEST';
			break;
		default:
			break;
	}
}

console.log(dirReduc([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ]));

module.exports = dirReduc;

/*
Test.assertSimilar(dirReduc([ 'NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST' ]), [ 'WEST' ]);
Test.assertSimilar(dirReduc([ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]), [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]);
Test.assertSimilar(dirReduc([ 'NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST' ]), []);
*/
