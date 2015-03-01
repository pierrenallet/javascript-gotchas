invoice = function () {
	this.items = [
        {name: 'iPad', price: 499}, 
        {name: 'iPhone', price: 799}, 
        {name: 'XBOX', price: 299}, 
	];
	this.total = 0;
};

invoice.prototype.computeTotal = function(){
	this.total = 0;
	this.items.forEach(function (item) {
		this.total += item.price;
	});
};

function bootstrap() {
	var i = new invoice();
	i.computeTotal();
	var items = document.getElementById("items");
	i.items.forEach(function(item) {
		var div = document.createElement("div");
		div.innerText = item.name + " " + item.price;
		items.appendChild(div);
	});
	var total = document.getElementById("total");

	total.innerHTML = "total " + i.total;
}

document.addEventListener("DOMContentLoaded", function (event) {
	bootstrap();
});
