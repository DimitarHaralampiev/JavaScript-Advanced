function solve(arrayNames) {
    let name = arrayNames.sort();
    for (let index = 0; index < name.length; index++) {
        console.log(`${index + 1}.${name[index]}`);
    }
}
solve(["John", "Bob", "Christina", "Ema"]);