const prompt = require("prompt-sync")();
let num = parseInt (prompt("Enter your age "));
let result = (num < 12 ? "$8":"$15");
console.log("Your price is "+result);