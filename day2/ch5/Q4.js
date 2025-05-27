function processAny(input) {
    return input.toString();
}
function processUnknown(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        throw new Error("지원되지 않는 타입입니다.");
    }
    console.log(processAny("hello"));
    console.log(processAny(42));
    console.log(processAny(true));
    console.log(processUnknown("hello"));
    console.log(processUnknown(42));
    try {
        console.log(processUnknown(true));
    }
    catch (error) {
        console.error(error.message);
    }
}
