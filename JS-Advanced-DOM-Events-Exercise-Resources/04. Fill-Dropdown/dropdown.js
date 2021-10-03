function addItem() {
    const newTextItem = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;
    const menu = document.getElementById('menu');

    const option = createElement('option', newTextItem, newItemValue);
    menu.appendChild(option);
    clear();

    function createElement(tagName, text, value) {
        const element = document.createElement(tagName);
        element.textContent = text;
        element.value = value;

        return element;
    }

    function clear() {
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}