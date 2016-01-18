var response = prompt("What was your best marathon time?");

if (response > 4 && response <= 5) {
    alert("Time was average.");
} else if (response > 2 && response <=4) {
    alert("Time was excellent.");
} else if (response > 5) {
    alert("Speed up!");
} else {
    alert("Please enter a correct time");
}
