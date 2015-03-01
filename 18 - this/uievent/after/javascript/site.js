function Calculator() {
	width = 0;
	height = 0;
};

Calculator.prototype.surface = function () {
	return this.height * this.width;
};

Calculator.prototype.hookupEvents = function () {
	var that = this;
	document.getElementById("height").onchange = function () {
		that.height = Number(document.getElementById("height").value);
		document.getElementById("surface").innerHTML = that.surface();
	};
	document.getElementById("width").onchange = function () {
		that.width = Number(document.getElementById("width").value);
		document.getElementById("surface").innerHTML = that.surface();
	};
};

document.addEventListener("DOMContentLoaded", function (event) {
	var c = new Calculator();
	c.hookupEvents();
});