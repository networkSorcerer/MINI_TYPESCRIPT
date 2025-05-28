type Admin = { type:"admin"; permissions: string[]};
type User = {type:"user"; email: string};

function processUser(user: Admin | User): string | undefined {
    if("permissions" in user) {
        return user.permissions.join(",");
    } else if ("email" in user) {
        return user.email;
    }
}

console.log(processUser({type:"admin", permissions:["read","write"]}));
console.log(processUser({type:"user", email:"user@example.com"}));

