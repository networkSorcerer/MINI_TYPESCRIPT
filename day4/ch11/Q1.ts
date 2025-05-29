function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([]));
