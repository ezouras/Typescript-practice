//decare type after the name.
//unlike something like int a;
//it's called postfix.
var a;
//tells you it's a number.
//you can't assign it to something like true or false or a string.
var b;
var c;
var foo; //type undefined.
//foo acn ONLY take the value undefined.
var nully;
var myArr = [1, 2, 3];
//how to declare in typescript.
// make it an array that ONLY takes numbers
var myArr; //my array is only an array o fnumbers.
//it will only take numbers so remove flexibility of having
//multiple types in an array.
var myArr2;
myArr.push(12); // this will work
myArr.push("str"); // this will not.
a = myArr.pop();
//a tuple gives you the flexiblity you want:
var myTuple = [1, true];
//you can have multiple tuypes.
//but now you are forced to create an array of the
//same size as the tuple.
//orer matters.
myTuple = [true, 5];
myTuple = [5, false];
a = 10;
b = true;
c = "hello";
