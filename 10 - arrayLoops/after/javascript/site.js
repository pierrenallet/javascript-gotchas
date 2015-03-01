var numbers = [1, 1, 2, 3, 5, 8, 13, 21];

function loadEarlierModules() {
    Array.prototype.contains = function (k) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === k) {
                return true;
            }
        }
        return false;
    }
}
loadEarlierModules();


function showArray(a) {
    a.forEach(function (item) {
        log("Item in array: " + item);
    });
}

showArray(numbers);