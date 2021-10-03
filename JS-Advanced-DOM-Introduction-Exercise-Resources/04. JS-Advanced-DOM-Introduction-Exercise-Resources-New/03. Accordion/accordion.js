function toggle() {
    let classButton = document.getElementsByClassName('button')[0];
    let divId = document.getElementById('extra');

    divId.style.display = (divId.style.display === 'none' || divId.style.display === '') ? 'block' : 'none';
    classButton.textContent = classButton.textContent == 'More' ? 'Less' : 'More';
}