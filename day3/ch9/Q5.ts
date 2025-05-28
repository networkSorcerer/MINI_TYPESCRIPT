type Square5 = {type: "square"; side: number}
type Circle5 = { type : "circle"; radius: number}

type Shape = Square5 | Circle5;

function calculateArea2(shape : Shape):number {
    switch(shape.type){
        case "square":
            return shape.side **2;
        case "circle":
            return Math.PI * shape.radius ** 2;
        default:

            const _exhaustive: never = shape;
            throw new Error (`Unhandled shape type : ${_exhaustive}`);
    }
}

console.log(calculateArea2({type:"square",side:5}));
console.log(calculateArea2({type: "circle", radius: 7}));