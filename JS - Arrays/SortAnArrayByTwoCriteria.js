function solve(strArr) {
    strArr.sort();
    strArr.sort((a, b) => a.length - b.length);

    return strArr;
}

console.log(solve(['test',
    'Deny',
    'omen',
    'Default'
]));