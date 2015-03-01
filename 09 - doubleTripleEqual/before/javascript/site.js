var array = ["0", "1", 0, 1, false, true];

var zeroCount = 0;
array.forEach(function (item) {
	if (item == 0) {
		zeroCount += 1;
	}
});

var message = "array contains " + zeroCount + " zeroes";
log(message);