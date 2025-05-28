type TTrack = {
    title:string,
    releaseDate:string,
}

type TArtist = {
    name : string,
    releaseDate: string
}

type SearchResult = TTrack | TArtist

interface SearchResponse {
    searchResult:TTrack|TArtist
}

let results : SearchResult[] = [{title:"hello", releaseDate:"2024"},{name:"hello", releaseDate:"2025"}]

function getName1(result:TTrack|TArtist){
    return result;
}

// 1. typeof

type SearchType = number | string ;

function searchByKeyWord(keyword:SearchType): string{
    // 넘버로 들어오는 타입은 스트링으로 바꿔주긴
    if(typeof keyword === "number" ) return keyword.toString();
    return keyword
}

console.log(searchByKeyWord(3), typeof searchByKeyWord(3));

type SearchType2 = object;

function searchByKeyWord2 (keyword: SearchType2) {
    console.log(typeof keyword);
}

searchByKeyWord2({name: "3"});

// 2. instanceof 

type Period = {
    start: string,
    end: string
}

type SearchType3 = Period | Date

function getDate(day:SearchType3):Date{
    if(day instanceof Date) return day
    return new Date(day.start)
}

getDate({start:"2024-01-01",end:""})


