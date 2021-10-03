function solve(numbers) {
    let array = [];
    numbers.sort((a, b) => a - b);

    let first = numbers[0];
    array.push(first);
    let last = numbers.pop();
    array.push(last);
    numbers.shift();

    for (let index = 0; index < numbers.length; index++) {
        array.push(numbers[index]);
    }

    return array;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));