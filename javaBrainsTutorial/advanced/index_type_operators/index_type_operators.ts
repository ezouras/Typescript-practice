/*
index_type_operators - you can access its values 
by some kind of index system. 

ie' interface and classe values are indexed by property names. 

*/

//no values are given. it just 
//says what the model is. 
interface Cat{
	name:string,
	age:number,
	//receives a string.  returns a cat sound. 
	feed(food:string):string;


}

//keyof operator 
type CatKey= keyof Cat;
//CatKey is a union of the keys values of Cat.  
// if you mouse over CatKey you will see: CatKey = "name" | "age" |"feed"
// it is either name or age. 


type ageType=Cat["age"];
//T[K]
// T = type. K= proprty names 
type feedType=Cat["feed"];

//function takes a T and K value. 
//K must be a property or key of the object T
//<type>.
//t[k] the value of the t object k key. 
// if "T" was of type "cat" and the key was "feed"
//the function "feed" would be returned. 
function getPropertyValue<T,K extends keyof T>(ObjectIs: T, propertyNameIs: K) : T[K]{
	return ObjectIs[propertyNameIs];
}

//initialize cat. it is an object that follos the "Cat"
//interface model
const cat: Cat = null;
const catAge=getPropertyValue(cat,"age");
const catName=getPropertyValue(cat,"name");

//k[] --> an array of "k's"
//T[K][]. --> the value of the property K of the object K. 
//an array of them. an array of "values"
// so that for every K property, return a value. 
function getProperties<T,K extends keyof T>(obj: T, properties: K[]): T[K][]{
	//go thru each property value that is passed in the array. 
	//
	return properties.map(property_name=>{
		return T[property_name];
	})
}

const catAgeAndName = getProperties(cat,["name","age"]);




