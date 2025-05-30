const prices: Record<string,number>={
    Laptop: 1000,
    Phone: 500,
    Table: 300,
}

function updateProductPrice (
    prices: Record<string, number>,
    product :string ,
    newPrice : number
) : Record<string, number>{
    return {...prices, [product]:newPrice};
}

console.log(updateProductPrice(prices,"Phone",550));