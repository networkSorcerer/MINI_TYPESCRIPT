type Track9 = {
    type: "track"; //
    title : string;
    releaseDate:string;
}

type Artist9 = {
    type:"artist",
    name:string,
    debuteDate:string
}

const result9:Track9|Artist ={
    type :"track",
    title:"hey",
    releaseDate:"2025",
}

interface Radio {
    type: "radio",
    title:string;
    numberOfSongs:number
}

type SearchResult9 = Track9 | Artist9 | Radio


function getTypeName (result:SearchResult9) {
    if(result.type === "track") return "트랙";
    else if(result.type === "artist") return "아티스트";
    // radio 타입을 지나친다
    else if (result.type === "radio") return "라디오"
    else {
        exhaustiveCheck(result);
        return "결과"
    }
}


function exhaustiveCheck(param:never){
    throw new Error("에러")
}
