var something = true;

var setup = function () {
    if (something) {
        location = "New York";
    }
    else {
        location = "San Francisco";
    }
    log("You are in " + location);
}
setup();


