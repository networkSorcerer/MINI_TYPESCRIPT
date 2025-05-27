interface BaseUser {
    id : number;
    name : string;
}

type AdminUser = BaseUser & {
    role : string;
};

type GuestUser = BaseUser & {
    visitCount : number;
};

const admin : AdminUser = {
    id:1,
    name: "Alice",
    role: "Administrator",
}

const quest: GuestUser = {
    id:2,
    name: "Bob",
    visitCount: 5,
};