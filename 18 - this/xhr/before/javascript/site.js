function ajax (url, callback)
{
    var handleStateChange = function () {
        switch (xmlhttp.readyState) {
            case 0: // UNINITIALIZED
            case 1: // LOADING
            case 2: // LOADED
            case 3: // INTERACTIVE
                break;
            case 4: // COMPLETED
                callback(xmlhttp.responseText);
                break;
            default: throw new Error("Unexpected state");
        }
    };
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = handleStateChange;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function Store() {
    this.items = [];
    this.itemsChanged = function () { };
};

Store.prototype.retrieve = function () {
    ajax("/data.html", function (response) {
        this.items = JSON.parse(xmlhttp.responseText);
        this.itemsChanged();
    });
};

function bootstrap() {
    var store = new Store();
    store.retrieve();
    store.itemsChanged = function () {
        store.items.forEach(function (item) {
            var div = document.createElement("div");
            div.innerText = item.name + " $" + item.price;
            document.getElementById("items").appendChild(div);
        });
    }
};