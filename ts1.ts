export{}
//we added teh above because without it the file
//will be treated as a script other than a module.
//with it, it's treated as a module.

//script = a directly executable piece of code. The global scope
//is shared.
//module = a librarty imported by another piece of code.
// a module has it's own scope.
let message = "Hello World";
console.log(message);


let x=10;
const y = 20;
let x=30;

let sum;

const title;
let isbeginner:boolean =true;
//isbegineer is a boolean that equals true.
let total:number =4;
let name:string="Evie";

//backticks
let sentence: string=`My name is ${name}
I am a beginner in typescript`;
console.log(sentence);

//name=true;
//static type checking.
let n:null=null;
let u: undefined = undefined;
let isNew:boolean=null;
let myName:string=undefined;


//array
let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];
//no advantage of one over the other.

//array of mixed type?
let person1: [string,number]=["Evie",22];
//however, the numbers is fixed. it must match. can only have two values for that
//array.   also you cannot swap the values.

enum Color{Red,Green,Blue};//default values will be {0,1,2}
enum Color2{red=5,green,blue};//default values {5,6,7}

let c:Color=Color.Green;








//
