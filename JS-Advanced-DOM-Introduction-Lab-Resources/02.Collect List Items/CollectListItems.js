function extractText() {
    const text = [...document.getElementsByTagName('li')];
    const element = text.map(e => e.textContent);

    document.getElementById('result').value = element.join('\n');
}