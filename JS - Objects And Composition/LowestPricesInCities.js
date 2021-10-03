function solve(input) {
    let products = {};
    let seq = [];

    for (const iterator of input) {
        let arr = iterator.split(' | ');
        let town = arr[0];
        let product = arr[1];
        let price = Number(arr[2]);

        if (product in products) {
            if (price < products[product].price) {
                products[product].price = price;
                products[product].town = town;
            }
        } else {
            let obj = {};
            obj.price = price;
            obj.town = town;
            products[product] = obj;
            seq.push(product);
        }
    }

    for (const iterator of seq) {
        console.log(iterator + " -> " + products[iterator].price + ' (' + products[iterator].town + ') ');
    }
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000',
    'New York | Burger | 10'
]));