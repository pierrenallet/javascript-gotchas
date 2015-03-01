
function onAddProduct() {
	var product = document.getElementById("product").value;
	addProduct(product);
};

function addProduct(productName, quantity) {
	var msg = productName + " (" + quantity + ")";
	console.log(msg);
	document.getElementById("cart").innerHTML += '<div>' + msg + '</div>';
}