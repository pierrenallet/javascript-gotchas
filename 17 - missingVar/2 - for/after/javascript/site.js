var printWithSquare = function (num) {
    var i = num * num;
    log("The number is now " + num + " whose square is " + i);
}

var printer = function () {
	for (var i = 1; i <= 5; i++) {
	    printWithSquare(i);
	}
} 

printer();








