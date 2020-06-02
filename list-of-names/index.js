function list(names) {
	return names.reduce((acc, element, index) => {
		if (index === 0) {
			return (acc = acc + element.name);
		}
		if (index < names.length - 1) {
			return (acc = acc + ', ' + element.name);
		} else {
			return (acc = acc + ' & ' + element.name);
		}
	}, '');
}

module.exports = list;

/*
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/
