// string
// number
// boolean
// null
// undefined
// ------
// symbol
// bigint
var a = 3;
a = 4;
a = 9.0;
a = -8.8;
// let b: boolean = true
// b = false
var b = true;
// 자동으로 타입을 추론 할수 있음 하지만 
// 그렇게 사용 안하는 게 좋음 
var c = null;
var d = undefined;
function double(n) {
    return n * 2;
}
console.log(double(3));
