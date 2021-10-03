function solve(numbers) {
    let array = Math.floor(numbers.length / 2)
    numbers.sort((a, b) => a - b);
    let arr = numbers.slice(array);
    return arr;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));