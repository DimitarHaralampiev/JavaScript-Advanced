function solve(number, command1, command2, command3, command4, command5) {

    number = applyOperation(number, command1);
    console.log(number);
    number = applyOperation(number, command2);
    console.log(number);
    number = applyOperation(number, command3);
    console.log(number);
    number = applyOperation(number, command4);
    console.log(number);
    number = applyOperation(number, command5);
    console.log(number);

    function applyOperation(num, op) {
        let parseNum = Number(num);
        switch (op) {
            case 'chop':
                parseNum /= 2;
                break;
            case 'dice':
                parseNum = Math.sqrt(parseNum);
                break;
            case 'spice':
                parseNum += 1;
                break;
            case 'bake':
                parseNum *= 3;
                break;
            case 'fillet':
                parseNum *= 0.8;
                break;
            default:
        }

        return parseNum;
    }

    return number;
}

console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));