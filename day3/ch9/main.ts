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

const result9:Track9|Artist9 ={
    type :"track",
    title:"hey",
    releaseDate:"2025",
}