

interface IStudent { // 객체만 가능한 부분
    name: string;
    age?:number;
    isStudent?:boolean;
}

type TStudent = {
    name:string,
    age?:number
}

type NewType = number | string // 원시타입도 가능, 튜플 타입 

type Tuple = [number,string,boolean]

let b : IStudent = {name:"noona",age:34}
//let b : {name:string|number|boolean, age?:number} = {name:"noona",age:34}

let c : TStudent={name:"noona",age:23}
// let c : {name:string,age:number}={name:"noona",age:23}

let d : {name:string|number|boolean, age?:number} ={name:"asd",age:12}
let e : {name:string|number|boolean, age?:number} = {name:"adsf"}

interface IPerson{
    name:string;
    age:number;
    gender:string;
}

interface IForeigner extends IPerson{
    // name:string;
    // age:number;
    // gender:string;

    nationality:string;
}