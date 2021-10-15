function addItem() {
    let inputType = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');


    let createOption = document.createElement('option');

    createOption.value = inputValue.value;
    createOption.innerText = inputType.value;
    select.appendChild(createOption);

    select.innerHTML += createOption;

    inputType.value = '';
    inputValue.value = '';
}