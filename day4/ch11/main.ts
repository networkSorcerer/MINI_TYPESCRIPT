/// 1. 조건부 타입

type TString<T> = T extends string ? "yes" : "no";

type reuslt1 = TString<number>;

// 2. mapped type

type TMovie = {
  title: string;
  genre: string;
  rate: number;
};

type Subset<T> = {
  [K in keyof T]?: T[K];
};
const movie1: Subset<TMovie> = { title: "기생충", genre: "액션" };
const movie2: Subset<TMovie> = { rate: 2 };
