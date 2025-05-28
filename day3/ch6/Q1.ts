type TQProduct ={
    id:number;
    name:string;
    price:number;
};

type TQDiscount = {
    discountPercentage: number;
};

function calculateDiscountedPrice(item:TQProduct & TQDiscount):number{
    return item.price - (item.price* item.discountPercentage) /100;
}

const discountedProduct : TQProduct & TQDiscount = {
    id:101,
    name:"Laptop",
    price: 1000,
    discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct));