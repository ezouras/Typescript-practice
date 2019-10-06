"use strict";
exports.__esModule = true;
//we added teh above because without it the file
//will be treated as a script other than a module.
//with it, it's treated as a module.
//script = a directly executable piece of code. The global scope
//is shared.
//module = a librarty imported by another piece of code.
// a module has it's own scope.
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var x = 30;
var sum;
var title;
var isbeginner = true;
//isbegineer is a boolean that equals true.
var total = 4;
var name = "Evie";
//backticks
var sentence = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentence);
