function createObject<K, V>(key: K, value: V): { [P in K]: V } {
  return { [key]: value } as { [P in K]: V };
}
console.log(createObject("id", 123));
console.log(createObject("name", "Alice"));
