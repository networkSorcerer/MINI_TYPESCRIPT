// 조건부 타입 정의
type RequestData<T> = T extends "text"
  ? string
  : T extends "json"
  ? Record<string, any>
  : T extends "binary"
  ? Uint8Array
  : never;

// 요청 처리 함수
function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
  if (type === "text") {
    return `Processed: ${data}`;
  } else if (type === "json") {
    return `Processed: ${JSON.stringify(data)}`;
  } else if (type === "binary") {
    return `Processed: ${data.join(",")}`;
  }
  throw new Error("Unsupported type");
}

// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: {"key":"value"}"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"

