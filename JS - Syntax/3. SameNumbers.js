function solve(number) {
    let isValid = true;
    let num1 = 0;
    let sum = 0;
    let word = String(number);
    for (let i = 0; i < word.length - 1; i++) {
        let num = Number(word[i]);
        num1 = Number(word[i + 1]);
        if (num !== num1) {
            isValid = false;
        }
        sum += num;
        if (i == word.length - 1) {
            sum += num1;
        }
    }
    console.log(isValid);
    return sum += num1;
}

console.log(solve(2222222));
console.log(solve(1234));