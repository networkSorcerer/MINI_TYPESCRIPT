var results = [{ title: "hello", releaseDate: "2024" }, { name: "hello", releaseDate: "2025" }];
function getName(result) {
    return result;
}
function searchByKeyWord(keyword) {
    // 넘버로 들어오는 타입은 스트링으로 바꿔주긴
    if (typeof keyword === "number")
        return keyword.toString();
    return keyword;
}
console.log(searchByKeyWord(3), typeof searchByKeyWord(3));
function searchByKeyWord2(keyword) {
    console.log(typeof keyword);
}
searchByKeyWord2({ name: "3" });
