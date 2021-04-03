function somar() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    alert('total:  ' + (n1 + n2));
}

function subtrair() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    alert('total:  ' + (n1 - n2));
}

function dividir() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    alert('total:  ' + (n1 / n2));
}

function multiplicar() {
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);
    alert('total:  ' + (n1 * n2));
}