type ContactInfo = {
    phone: string;
    address : string;
};

type OrderInfo = {
    orderId : number;
    items: string[];
};

function printOrderSummary(order: ContactInfo & OrderInfo):string {
    return `Order ${order.orderId} (Phone: ${order.phone})`;
}

const orderDetails : ContactInfo & OrderInfo = {
    phone :"123-456-7890",
    address : "123 Main St",
    orderId : 2023,
    items: ["Laptop","Mouse"],
};

console.log(printOrderSummary(orderDetails));
