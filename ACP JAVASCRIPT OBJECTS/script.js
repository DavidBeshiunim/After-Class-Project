var student = {
    name: "David",
    roll: 12,
    grade: 9,
};

document.getElementById("student_info").innerHTML = "name" + student.name + "Roll:" + student.roll + "Grade:" + student.grade;

// Built-in object
document.getElementById("abs_value").innerHTML = Math.abs(-4)

document.getElementById("asin_value").innerHTML = Math.asin(0);

document.getElementById("acos_value").innerHTML = Math.acos(-10)

//Arguments object 

function multiply() {
    var product = 2;
    for (var index = 0; index <= 4; index + 2) {
        document.write(index);
        document.write("<br>");
        product = product * arguments[index];
    }
    document.write(product);
}

//Multiply: 1, 2, 3, 4, 5
multiply(1, 2, 3, 4, 5)