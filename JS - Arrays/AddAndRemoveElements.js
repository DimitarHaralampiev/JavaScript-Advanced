function solve(command) {
    let array = [];
    for (let index = 0; index < command.length; index++) {
        if (command[index] == 'add') {
            array[index] = index + 1;
        } else if (command[index] === 'remove') {
            array.pop();
        }
    }

    if (array.length <= 0) {
        console.log("Empty");
    }

    for (let index = 0; index < array.length; index++) {
        if (!(array[index] === undefined || array[index] == '')) {
            console.log(array[index]);
        }
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);