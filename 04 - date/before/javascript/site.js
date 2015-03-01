function consumeDate() {
    var stringDate = document.getElementById("input").value;
    var date = new Date(stringDate);
    document.getElementById("day").innerHTML = date.getDay();
    document.getElementById("month").innerHTML = date.getMonth();
    document.getElementById("year").innerHTML = date.getFullYear();

}