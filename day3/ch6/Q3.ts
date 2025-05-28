type Profile = {
    id: number;
    name: string;
    email: string;
};

type Activity = {
    lastLogin: Date;
    actions: string[];
}

function mergeUserData(profile: Profile, activity: Activity): Profile & Activity {
    return { ...profile, ...activity};
}

function getUserSummary(user:Profile & Activity):string {
    return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

const profile : Profile = {id:1, name:"Alice",email:"alice@example.com"};
const activity : Activity = {
    lastLogin : new Date("2024-01-01T10:00:00Z"),
    actions:["login","viewed dashboard","logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));