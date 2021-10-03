function solve(numArr) {
    let array = [numArr[0]];
    for (let i = 1; i < numArr.length; i++) {
        const el = numArr[i];
        if (el >= array[array.length - 1]) {
            array.push(el);
        }
    }

    console.log(array);
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);