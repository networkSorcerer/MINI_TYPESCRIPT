// 1. Omit

import { LargeNumberLike } from "crypto";

interface User {
    id: number;
    name: string;
    email : string;
    password : string;
    age:number;
    address:string;
}

// interface PublicUser {
//     id: number;
//     name: string;
//     email : string;
//     age: number;s
// }

type PublicUser = Omit<User, "password" | "age">

let userProfile:PublicUser ={
    id: 2,
    name: "noona",
    email: "adsf",
    // age: 23,
    address: "342",
    // password: "234"
}


// 2. Pick

interface BasicUserInfo {
    id: number,
    name: string
}

type BasicUserInfo2 = Pick<User,"id"|"name">

// 3. Partial ? 

interface Address {
    street : string;
    city : string;
    county : string;
}


const updateAddress =(address: Partial<Address>) => {
    console.log(address);
}

updateAddress({street:"234", city:"incheon",county:"KR"});