function solve() {
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;

    //text.toLowerCase();

    let result = [];

    if (namingConvention === 'Camel Case') {
        let textArr = text.split(' ');
        result.push(textArr[0].toLowerCase());
        for (let index = 1; index < textArr.length; index++) {
            let repl = textArr[index].substring(0, 1);
            let replUpperCase = repl.toUpperCase();
            let repl1 = textArr[index].substring(1, textArr[textArr.length]);
            let totalRepl = replUpperCase.concat(repl1);
            result.push(totalRepl);

            document.getElementById('result').textContent = result.join('');
        }

    } else if (namingConvention === 'Pascal Case') {
        let textArr = text.split(' ');

        for (let index = 0; index < textArr.length; index++) {
            let repl = textArr[index].substring(0, 1);
            let replUpperCase = repl.toUpperCase();
            let repl1 = textArr[index].substring(1, textArr[textArr.length]);
            let replLowerCase = repl1.toLowerCase();
            let totalRepl = replUpperCase.concat(replLowerCase);
            result.push(totalRepl);

            document.getElementById('result').textContent = result.join('');
        }
    } else {
        result.push('Error!');
        document.getElementById('result').textContent = result;
    }
}