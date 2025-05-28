// 매개변수 및 리턴 타입 정의
function processInput(input: number[] | string[] | { message: string }): number | string | Error {
  // 숫자 배열 처리
  if (Array.isArray(input) && typeof input[0] === 'number') {
    return input.reduce((sum, num) => sum + num, 0); // 배열의 합을 구합니다.
  }

  // 문자열 배열 처리
  if (Array.isArray(input) && typeof input[0] === 'string') {
    return input.join(''); // 문자열 배열을 이어붙입니다.
  }

  // 객체 처리
  if (input && typeof input === 'object' && 'message' in input) {
    return (input as { message: string }).message.toUpperCase(); // message 속성 대문자로 변환
  }

  // 그 외의 경우에는 에러 발생
  return new Error('Invalid input type');
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
//console.log(processInput(42)); // Error: Invalid input type
