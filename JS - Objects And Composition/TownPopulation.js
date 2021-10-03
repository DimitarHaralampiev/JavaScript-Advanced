function townPopulation(townArr) {
    const towns = {};

    for (const townAsString of townArr) {
        let [names, population] = townAsString.split(' <-> ');
        population = Number(population);

        if (towns[names] != undefined) {
            population += towns[names];
        }

        towns[names] = population;
    }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);