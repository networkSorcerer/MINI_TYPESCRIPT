//Female Male

enum Gender {
    FEMALE = "Female",
    MALE = "Male",
}

let gender:Gender = Gender.FEMALE;

enum SearchType {
    Date, // 0
    KEYWORD, // 1
    ORDER, // 2
}

console.log("hey", SearchType.ORDER);