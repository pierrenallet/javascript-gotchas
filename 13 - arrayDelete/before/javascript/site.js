
var a = [42, 0, 99, 2, -1, 23];


log('Contents of array,  # of items: ' + a.length);

a.forEach(function (item) {
	log('Item ' + ': ' + item);
});

delete a[0];

log("deleting first item?");

log('Contents of array, # of items: ' + a.length);

a.forEach(function (item) {
    log('Item ' + ': ' + item);
});

