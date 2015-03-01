var log = function (text) {

	console.log(text);

	var messageContainer = document.getElementById("messageContainer");
	messageContainer.style.display = "block";

	var msgArea = document.getElementById("messageArea");
	msgArea.innerHTML += "<div>" + text + "</div>";
	messageContainer.scrollTop = (messageContainer.scrollHeight);

};

var log_error = function (text) {
	log("<span class=\"error-message\">Error: " + text + "</span>");
};

var log_warning = function (text) {
	log("<span class=\"warning-message\">Error: " + text + "</span>");
};
