type IsArray<T> = T extends Array<any> ? true : false;

function checkArrayType<T>(value: T): string {
  if (Array.isArray(value)) {
    return "This is an array";
  } else {
    return "This is not an array";
  }
}

console.log(checkArrayType([1, 2, 3]));
console.log(checkArrayType("Hello"));
console.log(checkArrayType({ key: "value" }));
