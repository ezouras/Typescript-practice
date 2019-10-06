//https://medium.com/better-programming/typescript-generics-90be93d8c292
function any_name(value) {
    return value;
}
//pass a value to the any_name function. "value" is any
//arbitrary name. should represent what you are passing but it
//coudl be anything.  "Number" is the type that the argument should be.
//:Number{  means that the function should return a number
console.log(any_name(1)); //1
//Generic
//allows us to write a function that can take in any type and will
//transform our functino based on that type.
function identity(value) {
    return value;
}
console.log(identity("woot!"));
console.log(identity("wuz up!")); //string is infered because it is a simple type.
//if the type gets too complicated it will defualt to type being "any"
//for the above.  when you callthe function,
//you must identify a "type".  the "type" or <T>
//is then chained to the parameter you pass to the function.
//and the value that is returned must all be of that
//TYPE. You simply plae the T wherever you want
//to ensure THAT TYPE.
console.log(identity(1)); //1
//you can use more than one type:
function idAndMessage(id, message) {
    console.log(message);
    return id;
}
console.log(idAndMessage(5, "hi!"));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
var typescript_info = {
    name: "Typescript",
    superset_of: "Javascript",
    difficulty: Difficulty.Intermediate
};
var superset_of = getProperty(typescript_info, "difficulty");
console.log(level_of_difficulty);
