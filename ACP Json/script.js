
const student = {
    name: "joseph",
    grade: 8
}
// Convert JS Object into JSON
const student_json = JSON.stringify(student)
document.write(student_json + "<br>")

// Convert JSON  into JS Object
const student_new = JSON.parse(student_json);
document.write(student_new.name + "<br>")

// Promise, Async, Await
function bringicecream() {
    return new Promise((resolve, reject) => {
        const friendBringicecream = true;

        setTimeout(function () {
            if (friendBringicecream == true) {
                resolve("Yay! Your friend has bought the ice cream!")
            } else {
                reject("My friend could not bring the ice cream!");
            }
        }, 5000);
    });
}

async function hangout() {
    document.write("Calling your friend to bring ice cream!<br>");
    try {
        const message = await bringicecream();
        document.write(message + "<br>");
        document.write("Let's hangout");
    } catch (error) {
        document.write(error);
    }
}
hangout();