function calc() {
    const textIdFirst = Number(document.getElementById('num1').value);
    const textIdSecond = Number(document.getElementById('num2').value);

    const result = textIdFirst + textIdSecond;

    document.getElementById('sum').value = result;
}
