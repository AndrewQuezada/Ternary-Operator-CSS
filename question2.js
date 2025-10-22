const prompt = require("prompt-sync")();
let num = parseInt (prompt("Enter how much you spent "));
let result = (num >= 100 ? "10%": "0%");
console.log("You get a "+result+" discount");