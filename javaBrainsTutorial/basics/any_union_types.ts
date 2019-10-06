//use "any" type if you wnat to import
//javascriptin to typescript.

//mouse over and see that ti si of type "any"
var a;
//or you can explicitly use it.
var b: any;
//don't do type chckecing
b=10;
b = true;
a =true;
a =12;
//no errors.

//what if it is limited to the type sit can be.
//what if you want only a number or a boolean - but nothing eles.


//that is when you create a union type
var c : number | boolean;//either a number or a boolean.
c = "hi";//doesn't work. not a boolean or a number.
var d: boolean|number|string;
d="bye!";
