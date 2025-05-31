function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] as T[K];
}

// 테스트 코드
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user, "name")); // "Alice"
console.log(getValue(user, "email")); // "alice@example.com"


