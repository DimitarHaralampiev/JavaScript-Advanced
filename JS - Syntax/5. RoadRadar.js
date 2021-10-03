function solve(speed, drive) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch (drive) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                return `Driving ${speed} km/h in a ${motorwayLimit} zone`;
            } else {
                speed -= motorwayLimit;
                if (speed <= 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${motorwayLimit} - speeding`;
                } else if (speed <= 40 && speed > 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${motorwayLimit} - excessive speeding`;
                } else {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${motorwayLimit} - reckless driving`;
                }
            }
            break;
        case 'city':
            if (speed <= cityLimit) {
                return `Driving ${speed} km/h in a ${cityLimit} zone`;
            } else {
                speed -= cityLimit;
                if (speed <= 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${cityLimit} - speeding`;
                } else if (speed <= 40 && speed > 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`;
                } else {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${cityLimit} - reckless driving`;
                }
            }
            break;
        case 'interstate':
            if (speed <= interstateLimit) {
                return `Driving ${speed} km/h in a ${interstateLimit} zone`;
            } else {
                speed -= interstateLimit;
                if (speed <= 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${interstateLimit} - speeding`;
                } else if (speed <= 40 && speed > 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${interstateLimit} - excessive speeding`;
                } else {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${interstateLimit} - reckless driving`;
                }
            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                return `Driving ${speed} km/h in a ${residentialLimit} zone`;
            } else {
                speed -= residentialLimit;
                if (speed <= 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${residentialLimit} - speeding`;
                } else if (speed <= 40 && speed > 20) {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`;
                } else {
                    return `The speed is ${speed} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`;
                }
            }
            break;
        default:
    }
}

console.log(solve(200, 'motorway'));
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));