function solve(fruit, kg, price) {
    let totalKg = kg / 1000;
    let totalPrice = totalKg * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${totalKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);