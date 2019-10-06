/*
1/ type script will assign a type even if you don't declare it
if you assign it a value. it will know and it wil lspit out an
error if you are not consistant.


*/
var a =10;
var b= true;
var c = "hello";

a = false;
//error still occurs even if you don't declare
//a as a number.

//this function declares that it is returning a string.
function greet():string {
  return "good morning";
}

//this implicitly assumes the return type is a sgring.
//you can mouse over to see. mouse over the function declaration
//or the greet3()


function greet2(){
  return "good morning";
}

var greeting=greet();
var greeting2=greet2();
