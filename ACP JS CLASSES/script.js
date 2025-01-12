class Student {
    //property : class variable
    grade = 9;
    static subject = "math";
    //Constructor : it's a special method
    constructor(sname, sage) {
        //properties: instance variable
        this.name = sname;
        this.age = sage;
    }

    //method
    getDetails() {
        document.write("Name: " + this.name + "Grade: " + this.grade + "Age:" + this.age);
    }
}

// To use the class, we have to create object
const anyiam = new Student("desire", 9);
anyiam.getDetails();

document.write("<br>")

const david = new Student("david", 9);
david.getDetails();

document.write("<br>");

const Karthik = new Student("zainab", 9);
Karthik.getDetails();

document.write("<br>");
document.write("All the students are learning " + Student.subject + " and they are doing very GREAT!!!");