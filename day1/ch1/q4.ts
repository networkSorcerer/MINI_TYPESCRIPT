function stringifyValue(value:string|null|undefined):string {
  // 여기에 구현
  if(value === null || value === undefined){
    return "값이 없습니다.";
  }
  return value;
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"

