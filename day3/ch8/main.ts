// 3. in

type Track = {
    title : string,
    releaseDate: string,
}

type Artist = {
    name:string,
    releaseDate:string
}

function getName(result:Track|Artist){
    if("title" in result) return result.title
    return result.name
}

// is 

// function 타입가드(변수 : any) : 변수 is 특정타입 {
//     return 조건식;
// }

function isTrack(result: Track | Artist) : result is Track {
    return (result as Track).title !== undefined
}

function isArtist(result:Track|Artist) : result is Artist{
    return (result as Artist).name !== undefined
}

function printInfo(result:Track|Artist) {
    if(isTrack(result)){
        console.log(result.title)
    } else if (isArtist(result)){
        console.log(result.name)
    }
}