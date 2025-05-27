type User = {
    id: number;
    name: string;
    address:{
        city: string;
        zipCode:number;
    };
};

const user2: User ={
    id:1,
    name: "Alice",
    address :{
        city :"Seoul",
        zipCode:12345,
    },
};