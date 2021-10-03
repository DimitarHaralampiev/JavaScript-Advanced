function solve(numbers) {
    let newarray = [];
    for (let index = 0; index < numbers.length; index++) {
        let num = Number(numbers[index]);
        if (num < 0) {
            newarray.unshift(num);
        } else {
            newarray.push(num);
        }
    }

    return newarray;
}

console.log(solve([3, -2, 0, -1]));