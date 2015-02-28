function onAdd() {
	var value = document.getElementById("input").value;
	var items = document.getElementById("items");
	total = total + parseFloat(value);
	document.getElementById("total").innerHTML = total;
	document.getElementById("input").value = "";
	var d = document.createElement("div");
	d.innerHTML = value;
	items.appendChild(d);
};
var total = 0;


document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("add").onclick = onAdd;
});