function processInput(input: number[] | string[] | { message: string }): string | number {
  if (Array.isArray(input)) {
    if (typeof input[0] === "number") {
      return input.reduce((sum, num) => sum + num, 0); // 숫자 배열의 합계
    } else if (typeof input[0] === "string") {
      return input.join(""); // 문자열 배열의 연결 결과
    }
  } else if ("message" in input) {
    return input.message.toUpperCase(); // 메시지를 대문자로 변환
  }
  
  // 모든 조건에 맞지 않으면 undefined 반환 대신 명시적으로 처리해도 좋습니다.
  return 0; // 기본적으로 0을 반환할 수도 있습니다.
}

console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
