var text = "GOOD";

document.write(text.toUpperCase());

document.write("<br>");

document.write(text.toLowerCase());

document.write("<br>");

document.write(text.startsWith("go"));

document.write("<br>");

document.write("<br>");

for (var i = 5; i <= 500; i = i + 5) {

    document.write(i + " ");

}

document.write("<br>");
document.write("<br>");

var day = new Date().getMonth();
document.write(day);
var display_day;


switch (month) {
    case 1:
        display_month = "JANUARY";
        break;

    case 2:
        display_month = "FEBUARY";
        break;

    case 3:
        display_month = "MARCH";
        break;

    case 4:
        display_month = "APRIL";
        break;

    case 5:
        display_month = "MAY";
        break;

    case 6:
        display_month = "JUNE";
        break;

    case 7:
        display_month = "JULY";
        break;

    case 8:
        display_month = "AUGUST";
        break;

    case 9:
        display_month = "SEPTEMBER";
        break;

    case 10:
        display_month = "OCTOBER";
        break;

    case 11:
        display_month = "NOVEMBER";
        break;

    case 12:
        display_month = "DECEMBER";
        break;
    default:
        display_month = "Invalid month";
}

document.write("<br>")
document.write("THIS MONTH IS DECEMBER" + display_month)