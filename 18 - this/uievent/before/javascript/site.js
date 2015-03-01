function Calculator() {
	width = 0;
	height = 0;
};

Calculator.prototype.surface = function () {
	return this.height * this.width;
};

Calculator.prototype.hookupEvents = function () {
	document.getElementById("height").onchange = function () {
		this.height = Number(document.getElementById("height").value);
		document.getElementById("surface").innerHTML = this.surface();
	};
	document.getElementById("width").onchange = function () {
		this.width = Number(document.getElementById("width").value);
		document.getElementById("surface").innerHTML = this.surface();
	};
};

document.addEventListener("DOMContentLoaded", function (event) {
	var c = new Calculator();
	c.hookupEvents();
});