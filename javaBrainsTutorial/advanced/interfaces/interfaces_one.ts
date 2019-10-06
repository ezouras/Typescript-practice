interface RectangleGemotry{
	width:number,
	length:number,
	height?:number//height is optional
}

//function should draw a 2d if height not there. 
//should draw a 3d if it is there 

function findArea(rect_values: RectangleGemotry){
	let width = rect_values.width;
	let length = rect_values.length;
	let height = rect_values.height;
	if(rect_values.height)
	return width * length * height;
	return width * length;
}

let areaOfRect=findArea({
	width: 3,
	length:5
});
console.log(areaOfRect)