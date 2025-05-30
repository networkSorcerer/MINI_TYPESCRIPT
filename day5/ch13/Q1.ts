type User = {
    name : string;
    email: string;
    password: string;
}

function updateUserForm(user: User, updates : Partial<User>) : User {
    return {...user,...updates}
}

const currentUser = {name: "Alice", email:"alice@example.com", password: "1234"};
const updateForm = {email: "new-email@example.com"};

console.log(updateUserForm(currentUser, updateForm))