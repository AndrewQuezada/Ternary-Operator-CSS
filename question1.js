const prompt = require("prompt-sync")();
let num = parseInt (prompt("Enter temperature "));
let result = (num > 10 ? "Normal": "hot");
console.log("The temprtature is "+result);