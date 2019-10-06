//function should draw a 2d if height not there. 
//should draw a 3d if it is there 
function findArea(rect_values) {
    var width = rect_values.width;
    var length = rect_values.length;
    var height = rect_values.height;
    if (rect_values.height)
        return width * length * height;
    return width * length;
}
var areaOfRect = findArea({
    width: 3,
    length: 5
});
console.log(areaOfRect);
