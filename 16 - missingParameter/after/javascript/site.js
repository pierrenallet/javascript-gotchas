function onAddProduct() {
	var product = document.getElementById("product").value;
	addProduct(product);
};

function addProduct(productName, quantity) {
	if (quantity === void 0) quantity = 1;
	var msg = productName + " (" + quantity + ")";
	console.log(msg);
	document.getElementById("cart").innerHTML += '<div>' + msg + '</div>';
}