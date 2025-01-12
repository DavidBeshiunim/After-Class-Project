const a = 5;
document.write(typeof a);

document.write("<br>");
const b = NaN;
document.write(typeof b);

document.write("<br>");

let x = 40;
let y = 45;

let z = String(x) + String(y);
document.write(z);

document.write("<br>");

try {
    addalert(" ERROR SEEN ! !")
} catch (error) {
    document.write(error)
}

document.write("<br>");

const add = (x, y) => x + y;

document.write(add(10, 7));