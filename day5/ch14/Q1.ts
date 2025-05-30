type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

const shippingCosts : Record<RegionCode, number> ={
    US:10,
    EU: 15,
    ASIA: 20,
    AFRICA : 25
}

function calculateShippingCost(region:RegionCode, costs : Record<RegionCode,number>) : number{
    if(!(region in costs)) {
        throw new Error(`Unsupported region code : ${region}`);
    }
    return costs[region]
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
try {
  console.log(calculateShippingCost("AUSTRALIA" as RegionCode, shippingCosts)); // 에러 발생
} catch (error) {
  console.error(error.message); // "Unsupported region code: AUSTRALIA"
}
