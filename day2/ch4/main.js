//Female Male
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender || (Gender = {}));
var gender = Gender.FEMALE;
var SearchType;
(function (SearchType) {
    SearchType[SearchType["Date"] = 0] = "Date";
    SearchType[SearchType["KEYWORD"] = 1] = "KEYWORD";
    SearchType[SearchType["ORDER"] = 2] = "ORDER";
})(SearchType || (SearchType = {}));
console.log("hey", SearchType.ORDER);
