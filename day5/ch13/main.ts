// 1. Omit

import { LargeNumberLike } from "crypto";

interface User {
    id: number;
    name: string;
    email : string;
    password : string;
}

// interface PublicUser {
//     id: number;
//     name: string;
//     email : string;
//     age: number;s
// }

type PublicUser = Omit<User, "password">