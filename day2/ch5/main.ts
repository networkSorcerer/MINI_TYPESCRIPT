// any /////////////////////////////////////////////

let a1: any = "noona"
a1 = 3
a1 = true


// unknown ////////////////////////////////////////
let a:unknown = "noona"
a = 3
a = true

// let b: string = a

let anyType : any
let unknownType : unknown

anyType="hello"
unknownType = "hello"

console.log(anyType.toUpperCase())

if(typeof unknownType === "string"){
    console.log(unknownType.toUpperCase())
}

// void ///////////////////////////////////////////

function double (a,b) {
    console.log(a,b)
}

interface INewType{
    name:string;
    age:number;
    double: (a:number,b:number)=>void 
    getAge:(age:number)=> number
}

// never //////////////////////////////////////////////

function infinite():never{
    while(true){

    }
}

function throwError():never{
    throw new Error("항상 에러를 던집니다.")
}

type AorB = {a: number} | {b:number}

let c5 :AorB = {
    a:2,
    b:3
}