function onEnter() {
	var input = document.getElementById("input").value;
	var i = parseInt(input, 10);
	if (!isFinite(i))
		alert("Please enter a number");
	else
		document.getElementById("output").innerHTML = "You entered a valid value: " + i;
};