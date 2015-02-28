function displayDayOfWeek() {
	var text;
	switch (new Date().getDay()) {
		case 0: text = "Today is Sunday"; break;
		case 1: text = "Case of the Mondays"; break;
		case 2: text = "Tuesday"; break;
		case 3: text = "Wednesday"; break;
		case 4: text = "Thursday"; break;
		case 5: text = "TGIF"; break;
		case 6: text = "Saturday"; break;
		default: throw new Error("This should never happen");
	}
	document.getElementById("today").innerHTML = text;
};

document.addEventListener("DOMContentLoaded", function (event) {
	displayDayOfWeek();
});