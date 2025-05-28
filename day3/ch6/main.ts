type TProduct = {
    id:string;
    name:string;
    price:number;
    discount?:number;
}


type TDiscountProduct = TProduct & {discountRatio: number}

interface IProduct {
    id:string;
    name:string;
    price:number;
    
}

interface IDiscountProduct extends IProduct {
    discountRatio: number;
}

type Popularity = {
    rate : number
}

interface Review {
    review:number
}

type Filter = Popularity & Review

let filter : Filter= {
    rate : 2.3,
    review:3
}

interface IFilter extends Popularity, Review {

}

interface IProduct2 {
    img:string;
    name: string;
    description:string;
    discountPercent?:number;
}

interface ISalesProduct extends IProduct2 {
    discountPercent?:number
}

type ApiResponse = {
    products:IProduct2[],
    salesProducts:ISalesProduct[], 
}

const apiResponse :ApiResponse = {
    products : [
        {img:"pants.png",name:"나팔바지",description:"24년 신상"},
        {img:"shirts.png",name:"셔츠",description:"24년 신상"}
    ],
    salesProducts:[
        {img:"jacket.png",name:"자켓",description:"시즌상품",discountPercent:20},
        {img:"cap.png",name:"모자",description:"시즌상품",discountPercent:10}
    ]
}

// apiResponse.map(item=>item.discountPercent)