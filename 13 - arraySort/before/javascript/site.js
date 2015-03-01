function onAdd(sender, args) {
	var input = document.getElementById("input");
	var number = parseInt(input.value, 10);
	input.value = "";
	numbers.push(number);
	document.getElementById("output").innerHTML = numbers.toString();
}

function onSort(sender, args) {
	numbers.sort();
	document.getElementById("output").innerHTML = numbers.toString();
}
var numbers = [];

document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("add").addEventListener("click", onAdd);
	document.getElementById("sort").addEventListener("click", onSort);
});