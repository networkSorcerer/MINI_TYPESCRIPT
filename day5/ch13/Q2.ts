type UserProfile2 = {
    id:number;
    name: string;
    email: string;
    address : string;
};

function getProfileSummary(user: Pick<UserProfile2, "id" | "name">):Pick<UserProfile2,"id"|"name">{
    return {id: user.id, name:user.name};
}

const userProfile3 = {id:1,name:"alice", email:"alice@example.com", address: "123"};

console.log(getProfileSummary(userProfile3));