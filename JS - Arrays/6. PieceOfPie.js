function solve(pieFlavours, startFlavour, endFlavour) {
    let start = pieFlavours.indexOf(startFlavour);
    let end = pieFlavours.indexOf(endFlavour) + 1;
    let arr = pieFlavours.slice(start, end);
    return arr;
}

console.log(solve(['Pimpkin Pie', 'Key Lime Pie', 'Lemon Maringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Maringue Pie'));