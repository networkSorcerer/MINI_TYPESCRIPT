interface User3{
    id: number;
    name: string;
    email?: string;
}

interface Admin extends User3 {
    role : string;
}

const normalUser: User3 ={
    id:1,
    name: "Alice",
    email:"alice@example.com",
};

const adminUser :Admin = {
    id:2,
    name: "Bob",
    role:"Administrator",
}