window.onload = function () {
	log("<strong style='color: darkgreen;'>Hello from onload event!<strong>");
};

var setup = function (siteMode) {
	onload = siteMode === "Production";
	if (onload) {
		log("Setup as production")
		// ...
	}
}


// uncomment logs after seeing the problem.
//log(moduleName + ": onload -> " + typeof (window.onload));
setup("Production");
//log(moduleName + ": onload -> " + typeof (window.onload));
