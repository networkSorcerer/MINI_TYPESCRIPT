interface UserInterface {
    id: number;
    name: string;
    email?:string
};

type UserType ={
    id: number;
    name: string;
    email?: string;
};

const user:UserInterface = {
    id:1,
    name:"Alice",
};

const userWithEmail: UserType = {
    id: 2,
    name: "Bob",
    email:"bob@example.com",
}