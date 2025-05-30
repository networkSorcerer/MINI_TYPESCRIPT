type TeamMember = {
    id: number;
    name: string;
    email: string;
    role : "developer" | "designer" | "manager";
    isActive: boolean;
}

function createTeamMember(data: Partial<TeamMember>): TeamMember {
    return {
        id: data.id!,
        name: data.name || "",
        email : data.email || "",
        role : data.role || "developer",
        isActive : data.isActive ?? true,
    }
}

function filterTeamMembers (
    members: TeamMember[],
    filter: Pick<TeamMember, "role"|"isActive">
):TeamMember[] {
    return members.filter(
        (member) => 
            member.role === filter.role && member.isActive === filter.isActive
    );
}

function removeSensitiveInfo(members: TeamMember[]) : Omit<TeamMember, "email">[]{
    return members.map(({email,...rest}) => rest);
}

const members: TeamMember[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

const newMember = createTeamMember({id:4,name:"Diana"});
console.log(newMember);

const activeDesigners = filterTeamMembers(members, {role:"designer", isActive:true});
console.log(activeDesigners);

const saintizedMembers = removeSensitiveInfo(members);
console.log(saintizedMembers);
