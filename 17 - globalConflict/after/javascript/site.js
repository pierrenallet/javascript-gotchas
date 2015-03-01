var site = site || {};

site.version = "1.2.0.0";

site.printWelcomeMessage = function () {
	var msg = '<strong style="color: blue">Application starting up v' + site.version + '</strong>';
	site.logging.log(msg);
	site.logging.log("All good!");
};


document.addEventListener("DOMContentLoaded", function (event) {
	site.printWelcomeMessage();
});


