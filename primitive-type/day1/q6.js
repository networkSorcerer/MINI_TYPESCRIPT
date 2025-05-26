function isPrimitive(value) {
    // 여기에 구현
    return (value === null ||
        (typeof value !== 'object' && typeof value !== 'function'));
}
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
