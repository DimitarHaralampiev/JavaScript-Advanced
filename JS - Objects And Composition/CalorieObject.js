function solve(array) {
    let result = [];
    for (let index = 0; index < array.length; index += 2) {
        result[index] = array[index]
        result[index + 1] = Number(array[index + 1]);
    }
    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'
]));