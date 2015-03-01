
var lookup = [];
lookup['name'] = 'Tommy';
lookup['age'] = 27;
lookup['hobby'] = 'biking';

log(lookup['name'] + ' is ' + lookup['age'] + ' and likes ' + lookup['hobby']);

// mostly, would you expect to see keys, or values, or something here?
// it is empty!
log('contents of dictionary:');
lookup.forEach(function (item) {
	log("Array item: " + item);
});
log('------------------------------');

