

interface IStudent {
    name: string;
    age?:number;
    isStudent?:boolean;
}

type TStudent = {
    name:string,
    age?:number
}
let b : IStudent = {name:"noona",age:34}

//let b : {name:string|number|boolean, age?:number} = {name:"noona",age:34}

let c : TStudent={name:"noona",age:23}

// let c : {name:string,age:number}={name:"noona",age:23}

let d : {name:string|number|boolean, age?:number} ={name:"asd",age:12}
let e : {name:string|number|boolean, age?:number} = {name:"adsf"}