function addItem() {
    const input = document.getElementById('newItemText').value;
    const addChild = document.createElement('li');

    addChild.appendChild(document.createTextNode(input));

    document.getElementById('items').appendChild(addChild);

    document.getElementById('newItemText').value = '';
}