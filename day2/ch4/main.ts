//Female Male

enum Gender {
    FEMALE = "Female",
    MALE = "Male",
}

let gender:Gender = Gender.FEMALE;

enum SearchType {
    Date ="Date", // 0
    KEYWORD = "Keyword", // 1
    ORDER = "Order", // 2
}

console.log("hey", SearchType.ORDER);