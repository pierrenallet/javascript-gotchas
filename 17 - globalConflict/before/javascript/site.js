var site = {}

site.version = "1.2.0.0";

site.printWelcomeMessage = function () {
	var msg = '<strong style="color: blue">Application starting up v' + site.version + '</strong>';
	site.logging.log(msg);
};


document.addEventListener("DOMContentLoaded", function (event) {
	site.printWelcomeMessage();
});


