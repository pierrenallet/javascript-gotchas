function onAdd() {
	var value = document.getElementById("input").value;
	var items = document.getElementById("items");
	var total = document.getElementById("total").innerHTML;
	total = total + value;
	document.getElementById("total").innerHTML = total;
	document.getElementById("input").value = "";
	var d = document.createElement("div");
	d.innerHTML = value;
	items.appendChild(d);
};

document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("add").onclick = onAdd;
});