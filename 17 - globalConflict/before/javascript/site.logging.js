var site = {}
site.logging = {}


site.logging.log = function (text) {

	console.log(text);

	var messageContainer = document.getElementById("messageContainer");
	messageContainer.style.display = "block";

	var msgArea = document.getElementById("messageArea");
	msgArea.innerHTML += "<div>" + text + "</div>";
	messageContainer.scrollTop = (messageContainer.scrollHeight);

}