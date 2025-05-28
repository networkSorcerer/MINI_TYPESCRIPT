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