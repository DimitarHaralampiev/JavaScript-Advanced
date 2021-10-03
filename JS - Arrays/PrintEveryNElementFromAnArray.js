function solve(numbers, steps) {
    let array = [];
    for (let index = 0; index < numbers.length; index += steps) {
        array.push(numbers[index]);
    }
    console.log(array.join());
}
solve(['5', '20', '31', '4', '20'], 2);