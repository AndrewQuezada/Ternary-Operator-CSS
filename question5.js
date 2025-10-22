const prompt = require("prompt-sync")();
let age;

age = parseInt(prompt("Enter Your age "));

age < 13 ? console.log("you are a kid") :
            age < 20 ?  console.log("you are a teen") :
            age < 60 ? console.log("you are a adult") :
            console.log("senior");