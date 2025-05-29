type ArrayType<T> = T[];

const numberArray: ArrayType<number> = [1, 2, 3];

const stringArray: ArrayType<string> = ["a", "b"];

// // 카테고리 정보보
// {
//   status:"ok",
//   totalPage:2,
//   totalResult: 10,
//   page:1,
//   data:[{name:"액션"},[{name:"로맨스"},{name:"가족"}]]
// }

// // 영화정보
// {
//   status:"ok",
//   totalPage:20,
//   totalResult:300,
//   page:1,
//   data:[{title:"기생충",genre:"액션"},{title:"파묘",genre:"공포포"},{title:"7번방의기적",genre:"가족족"}]
// }

// // TV정보

// {
//   status:"ok",
//   totalPage:20,
//   totalResult:300,
//   page:1,
//   data:[{series:"논스톱",runningTime:"120"}]
// }

// type CategoryRespone = {
//   status:string,
//   totalPage:number,
//   totalResult: number,
//   page: number,
//   data:{name:string}[]
// }

// type MovieResponse = {
//   status:string,
//   totalPage:number,
//   totalResult: number,
//   page: number,
//   data:{title:string,genre:string}[]
// }

type ApiResponse<T> = {
  status: string;
  totalPage: number;
  totalResult: number;
  page: number;
  data: T[];
};

type Movie = { title: string; genre: string };
type MovieResponse = ApiResponse<Movie>;

type Category = {
  name: string;
};

type CategoryResponse = ApiResponse<{ name: string }>;

let movieData: MovieResponse = {
  status: "ok",
  totalPage: 20,
  totalResult: 300,
  page: 1,
  data: [
    { title: "기생충", genre: "액션" },
    { title: "파묘", genre: "공포포" },
    { title: "7번방의기적", genre: "가족" },
  ],
};

// function useState<T>(초기화값:T):[T,함수<T>]{
//   return [값, 함수]
// }
// function useState<S>(initialState:S | (()=> S)):[S, Dispatch<SetStateAction>]
// const [value, setValue] = useState(true);

// const [value2, setValue2] = useState<boolean>(false);

interface Length {
  length: number;
}

function getValue<T extends Length>(data: T) {
  console.log(data.length);
}

console.log(getValue("hello"));
