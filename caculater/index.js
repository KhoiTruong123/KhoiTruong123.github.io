"use trict"

let a = 0;
let result = "";
let operator = "";

function onNumberClick(el) {
    let value = el.value;
    let currentNumber = parseFloat(a + value);
    if (!isNaN(currentNumber)) {
        a = currentNumber;
        printToscreen(currentNumber);
        console.log("number2 " + a);
        console.log("number1 " + result);
    }

}

function addSubtract() {
    let value = document.getElementById('Noinhap').value;
    if (a > 0 || a < 0) {
        a = -value;
    }

    printToscreen(a);
}

function onDot(el) {
    let value = document.getElementById('Noinhap').value;
    a = value.includes(".") ? value : value + el;
    printToscreen(a);
}

function printToscreen(value) {
    let screen = document.getElementById("Noinhap");
    screen.value = value;
}

function onClearScreen() {
    result = NaN;
    a = 0;
    operator = '';
    printToscreen("0");
}

function onOperationClick(el) {
    let op = el.value;
    console.log(op)

    if (op !== "=") {
        operator = op;
        result = a;
        a = 0;
        return;
    }
    if (isNaN(result) || result == "") return;
    switch (operator) {
        case "+":
            result = Number(result) + Number(a);
            break;
        case "-":
            result = Number(result) - Number(a);
            break;
        case "x":
            result = Number(result) * Number(a);
            break;
        case "÷":
            result = Number(result) / Number(a);
            break;
        case "%":
            result = result / 100;
            break;
    }
    printToscreen(result);
}