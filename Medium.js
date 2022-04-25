// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
let userInput = prompt("Enter your birth month number");

if (userInput == 1) {
    console.log("January")
} else if (userInput == 2) {
    console.log("February")
} else if (userInput == 3) {
    console.log("March")
} else if (userInput == 4) {
    console.log("April")
} else if (userInput == 5) {
    console.log("May")
} else if (userInput == 6) {
    console.log("June")
} else if (userInput == 7) {
    console.log("July")
} else if (userInput == 8) {
    console.log("August")
} else if (userInput == 9) {
    console.log("September")
} else if (userInput == 10) {
    console.log("October")
} else if (userInput == 11) {
    console.log("November")
} else if (userInput == 12) {
    console.log("December")
} else {
    alert("Invalid, please enter number between 1 and 12")
};