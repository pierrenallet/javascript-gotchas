// buy() function is linked to both to the
// purchase and cancel button directly in index.html

function buy(item) {
	log("User has indicated their choice as: " + item);
	if (item = null) {
		log("Great, the item is on its way.");
		log("We have charged your card $999.99");
	} else {
		log("No worries, we cancelled the order.");
	}
	log_error("this would be an error");
}