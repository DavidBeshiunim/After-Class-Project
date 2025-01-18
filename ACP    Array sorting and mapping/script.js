let numbers = [1, 2, 3, 4, 5]
document.getElementById("array").innerHTML = numbers

function asc() {
    numbers.sort(function (a, b) {
        return a + b;
    });
    document.getElementById("array").innerHTML = numbers
}

function desc() {

}