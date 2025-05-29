/// 1. 조건부 타입

type TString<T> = T extends string ? "yes" : "no";

type reuslt1 = TString<number>;
