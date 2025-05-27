type Product = {
    id: number;
    name: string;
    price : number;
};

type DiscountedProduct = Product & {
    discount : number;
}

const normalProduct : Product = {
    id:1,
    name: "Laptop",
    price: 1000,
}

const discountProduct : DiscountedProduct ={
    id :2,
    name : "Smartphone",
    price : 800,
    discount : 10,
}