function consumeNumber() {
    var input = document.getElementById("input").value;
    var number = parseInt(input, 10);
    document.getElementById("output").innerHTML = number;

}