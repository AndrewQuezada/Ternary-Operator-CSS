//Weekend Check
const prompt = require("prompt-sync")();
let num;
num = prompt("Enter the day of the week ");
num =="sunday" || num == "Saturday" ? console.log("It is a weekend") : console.log("It is a Weekday");
