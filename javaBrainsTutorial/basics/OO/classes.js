/* use capitolization*/
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var aPerson = new Person();
//you get type completeion.
//you can do a "aperson." and it will show you what is
//available.
aPerson.firstname = "Evie";
console.log(aPerson.firstname);
