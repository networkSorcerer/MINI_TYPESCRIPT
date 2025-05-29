function isNumberArray<T>(array: T[]): boolean {
  return array.every((item) => typeof item === "number");
}

console.log(isNumberArray([1, 2, 3]));
console.log(isNumberArray(["a", "b", "c"]));
console.log(isNumberArray([]));
