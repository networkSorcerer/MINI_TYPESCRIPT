//Female Male
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender || (Gender = {}));
var gender = Gender.FEMALE;
var SearchType;
(function (SearchType) {
    SearchType["Date"] = "Date";
    SearchType["KEYWORD"] = "Keyword";
    SearchType["ORDER"] = "Order";
})(SearchType || (SearchType = {}));
console.log("hey", SearchType.ORDER);
