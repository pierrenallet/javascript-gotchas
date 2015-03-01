function consumeDate() {
    var stringDate = document.getElementById("input").value;
    var date = new Date(stringDate);
    document.getElementById("day").innerHTML = date.getDate();
    document.getElementById("month").innerHTML = date.getMonth() + 1;
    document.getElementById("year").innerHTML = date.getFullYear();

}