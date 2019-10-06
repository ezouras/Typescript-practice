/*
1/ number of arguments have to match in typescript.
2/ you can add an optinal argument if you follow it with a question mark
3/ you can declare the type that is returned by the function.
it looks just like a reg function but there is a color before
the {}
*/

function add(a,b){
  return a+b;
}

var sum = add(1,2);
console.log(sum);

//what happens when you pass in a string?
//still works.  it what is what javascript does.
//but when if you want to ensure that only two nubers are added?
var sum=add("foo",2);
console.log(sum)

var x=3;
number y=5;

var x:number;

function add2(a:number,b:number){
  return a+b;
}

var sum2=add2("hi",5);
console.log(sum2);
var sum3=add2(6,7);
console.log(sum3);

var sum4=add(1);
console.log(sum4);

//b is optional. it will be 3 if nothing is passed in.
function add3(a,b=3,c?){//the optinonal arguments should be the last ones
  if(!c)c=4;
  return a+b+c;
}
var sum5=add3(12);
console.log(sum5);

function add4(a=1,b=2,c=3):number{
  return a+b+c;
}

function add5(a=1:number,b=2:number):number{
  return a+b;
}

function add6(a:number,b:number):number{
return a+b;
}


function greet():string {
  return "good morning";
}


//
