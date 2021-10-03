document.getElementById('items').addEventListener('click', (ev) => {
    if (ev.target.tagName === 'A') {
        ev.target.parentNode.remove();
    }
});


function addItem() {
    const input = document.getElementById('newItemText');
    const addChild = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    addChild.href = '#';
    addChild.appendChild(deleteBtn);

    //addChild.appendChild(document.createTextNode(input));
    document.getElementById('items').appendChild(addChild);

    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}