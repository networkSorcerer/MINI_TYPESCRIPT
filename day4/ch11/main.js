/// 1. 조건부 타입
var movie1 = { title: "기생충", genre: "액션" };
var movie2 = { rate: 2 };
var pari = {
    first: "noona",
    second: 2,
    display: function () {
        console.log(this.first + "는" + this.second + "살 입니다.");
    },
};
pari.display();
