function appendToDisplay(value) {
    document.getElementById('displayResult').value += value;
}

function clearDisplay() {
    document.getElementById('displayResult').value = '';
}

function calculate() {
    let expression = document.getElementById('displayResult').value;
    let result = eval(expression);
    document.getElementById('displayResult').value = result;
}