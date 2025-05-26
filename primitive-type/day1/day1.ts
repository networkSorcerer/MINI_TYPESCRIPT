1.
let userName : string; // 예: 이름
let userAge : number; // 예: 나이
let isAdmin :boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;

2.
// 변수 선언과 초기값 지정
let productName : string = "하이엔드 pc"; // 상품 이름
let productPrice : number = 4000000; // 상품 가격
let isAvailable : boolean = true; // 상품 재고 여부

// 예시 출력
console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

3.
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(5, 3));


4.
function stringifyValue(value) {
  // 여기에 구현

}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"


5.
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // ?
console.log(compareValues(null, undefined)); // ?
console.log(compareValues(false, 0)); // ?
console.log(compareValues(NaN, NaN)); // ?
console.log(compareValues(42, 42)); // ?

6.
function isPrimitive(value: unknown): boolean {
  // 여기에 구현
}

// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false

