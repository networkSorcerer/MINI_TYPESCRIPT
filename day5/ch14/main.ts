type StrigNumberMap = Record<string, number>

const example: StrigNumberMap = {
    apple:123,
    orange:5,
    mango:5
}

type FruitColor = Record<'apple'|'orange',string>

const fruitColor:FruitColor = {
    apple:"red",
    orange:"orange",
    
}

type UserRole = "admin"|"user"|"guest"|"owner"

type RolePermission = {
    admin: string,
    user:string,
    guest: string
}

type RolePermission2 = Record<UserRole,string>

type Product14 = { id: string ; name:string; price:number;};

type ProductInventory = Record<string, Product14>

const inventoryResponse : ProductInventory = {
    apple:{id:"2", name: "apple",price:123},
    orange:{id:"2", name: "orange",price:123}
}