function solve(input) {
    let output = [];
    //let str = String(input);
    for (let i = 0; i < input.length; i += 2) {
        output.push(input[i]);
    }

    return output;
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));