type User2 = {
    name: string;
    email:string;
    password: string;
    role: string;
}

function filterSensitiveInfo(user: Omit<User2, "password">): Omit<User2, "password">{
    const {password, ...filteredInfo} = user;
    return filteredInfo;
}

const userInfo = {name: "alice", email:"ailce@example.com", password:"1234", role:"admin"};

console.log(filterSensitiveInfo(userInfo))