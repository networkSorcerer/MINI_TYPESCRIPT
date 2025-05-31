interface Track15 {
    title : string;
    releaseDate : string;
}

interface Artist15 {
    name : string;
    debutYear : number;
}

type SearchItem <T extends "track" | "artist"> = T extends "track" ? Track15 : Artist15

const result : SearchItem<"track"> = {
    title : "hey",
    releaseDate : "2024",
    name: "noona",
    debutYear : 2,
}

type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R ? R : never;

functioon getUserInfo() {
    return {name : "Alice", age: 25};
}

type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;

type UnwrapPromise<T> = T extends Promise<infer U> ? U :T;

type PromiseString = Promise<string>

type Result = UnwrapPromise<PromiseString>;

type ElementType<T> = T extends (infer U)[] ? U : T;

type ArrayOfNumber = number[];

type SingleNumber = ElementType<ArrayOfNumber>

// as

let someValue : unknown = "Hello , world";

console.log(someValue.length)

let newValue = someValue as string

console.log(newValue.length)

const inputElement = document.querySelector('input');

inputElement.value = "asdf"

let value: any = "I am a string!";

let numberValue = value as number;

numberValue + 1