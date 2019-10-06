class PizzaMaker{
	static create_pizza(pizza_details: {name:string; toppings:string[]}){
		return({
			name: pizza_details.name,
			toppings:pizza_details.toppings
		});
	}
}

let pizza_luey=PizzaMaker.create_pizza({name:"luey",toppings:["peppers","olives"]})

//without static class:

class PizzaMakerTwo{
	create_pizza(pizza_details: {name:string, toppings:string[]}){
		return({name:pizza_details.name, toppings:pizza_details.toppings});

	}
}

let pizza_maker_one=new PizzaMakerTwo();
let pizza_jerry=pizza_maker_one.create_pizza({name:"jerry",toppings:["red peppers","brocolli"]})

/*
Unlike classes, an interface is a virtual structure 
that only exists within the context of TypeScript. 
The TypeScript compiler uses interfaces solely for 
type-checking purposes. Once your code is transpiled 
to its target language, it will be stripped from its 
interfaces - JavaScript isn’t typed, there’s no use 
for them there.
*/

