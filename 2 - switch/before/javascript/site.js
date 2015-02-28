function displayDayOfWeek() {
	var text = "";
	switch (new Date().getDay()) {
		case 0: text = "Today is Sunday";
		case 1: text = "Case of the Mondays";
		case 2: text = "Tuesday";
		case 3: text = "Wednesday";
		case 4: text = "Thursday";
		case 5: text = "TGIF";
		case 6: text = "Saturday";
	}
	document.getElementById("today").innerHTML = text;
};

document.addEventListener("DOMContentLoaded", function (event) {
	displayDayOfWeek();
});