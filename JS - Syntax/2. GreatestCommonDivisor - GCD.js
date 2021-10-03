function solve(oneNumber, twoNumber) {
    while (twoNumber > 0) {
        let temp = twoNumber;
        twoNumber = oneNumber % twoNumber;
        oneNumber = temp;
    }

    return oneNumber;
}

console.log(solve(2154, 458));