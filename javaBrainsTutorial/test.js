//array of mixed type?
var person1 = ["Evie", 22];
//however, the numbers is fixed. it must match. can only have two values for that
//array.   also you cannot swap the values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //default values will be {0,1,2}
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 5] = "red";
    Color2[Color2["green"] = 6] = "green";
    Color2[Color2["blue"] = 7] = "blue";
})(Color2 || (Color2 = {}));
; //default values {5,6,7}
var c = Color.Green;
console.log("The green color is: ", c);
//
