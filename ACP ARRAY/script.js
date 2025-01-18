var programming_languages = ["html", "css", "bootstrap", "javascript"];

document.write(programming_languages);
document.write("<br>");

// Accessing array element
document.write(programming_languages[0]);
document.write("<br>");
document.write(programming_languages[1]);
document.write("<br>");
document.write(programming_languages[2]);
document.write("<br>");
document.write(programming_languages[3]);
document.write("<br>");

// Array Methods
// join() converts the array into a string. you can also put separator.
document.write(programming_languages.join("*"));
document.write("<br>");
//pop() removes the last element
programming_languages.pop();
programming_languages.pop();
programming_languages.pop();
document.write(programming_languages);
document.write("<br>");                                                                                                                                                                                         