function deleteByEmail() {
    let email = document.getElementsByName("name")[1].value;
    let secondLine = document.querySelectorAll("#customers tr td:nth-child(2)");

    for (let td of secondLine) {
        if (td.textContent == email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);

            document.getElementById('result').textContent = 'Deleted.';
            return;
        }

    }
    document.getElementById('result').textContent = 'Not found';
}