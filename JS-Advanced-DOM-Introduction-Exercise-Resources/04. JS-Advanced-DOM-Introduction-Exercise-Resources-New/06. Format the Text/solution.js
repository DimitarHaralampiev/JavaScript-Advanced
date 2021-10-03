function solve() {
    const text = document.getElementById('input').value;

    const pElement = document.createElement('p');

    pElement.textContent = text;

    const output = document.getElementById('output');

    pElement.appendChild(output);
}