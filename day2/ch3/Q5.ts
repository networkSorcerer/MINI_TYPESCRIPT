interface Product5 {
    id: number;
    name: string;
    price:number;
}

interface Order {
    orderId : number;
    products : Product5[];
    totalPrice : number;
}

const order: Order={
    orderId: 101,
    products:[
        {id:1, name: "Laptop", price:1000},
        {id:2, name:"Mouse", price: 50}
    ],
    totalPrice:1050,
}