class Car {
    public brand :string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

class Bike {
    constructor(public type:string) {}
}

function processVehicle (vehicle: Car | Bike): string {
    if(vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    } else if (vehicle instanceof Bike){
        return `Bike: ${vehicle.type}`;
    }else {
        throw new Error("유효하지 않은 Vehicle 타입입니다")
    }
}

const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar));
console.log(processVehicle(myBike));