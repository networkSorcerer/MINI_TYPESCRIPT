type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never;

// 테스트 코드
type Test1 = ExtractReturnType<() => string>; // string
type Test2 = ExtractReturnType<(x: number) => boolean>; // boolean
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>; // { id: number }


