function encodeAndDecodeMessages() {
    const textArea = document.querySelectorAll('textarea');
    const button = document.querySelectorAll('button');

    const map = {
        encode: {
            textArea: textArea[0],
            button: button[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            textArea: textArea[1],
            button: button[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        }
    };

    map.encode.button.addEventListener('click', (ev) => {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const type = ev.target.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';
        const message = map[type].text.value.split('').map(map[type].func.join(''));

        map.encode.text.value = '';
        map.decode.text.value = message;
    });

    map.decode.button.addEventListener('click', (ev) => {
        if (ev.target.tagName !== 'BUTTON') {
            return;
        }

        const type = ev.target.toLowerCase().trim().includes('decode') ? 'decode' : 'encode';
        const message = map[type].text.value.split('').map(map[type].func.join(''));

        map.encode.text.value = '';
        map.decode.text.value = message;
    });
}