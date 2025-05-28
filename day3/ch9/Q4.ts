type Rectangle = {width : number; height: number};
type Circle = {radius: number};

function isRectangle(shape: unknown) : shape is Rectangle{
    return (shape as Rectangle).width !== undefined && (shape as Rectangle).height !== undefined;
}
function calculateArea(shape: Rectangle | Circle) :number {
    if(isRectangle(shape)){
        return shape.width * shape.height;
    } else {
        return Math.PI * shape.radius **2;
    }
}

console.log(calculateArea({width:10, height: 5}));
console.log(calculateArea({radius: 7}));