"use trict"

let a = 0;
let result = "";
let operator = "";

function onNumberClick(el) {
    let value = el.value;
    let currentNumber = Number(a + value)
    if (!isNaN(currentNumber)) {
        a = currentNumber;
        printToscreen(currentNumber);
        console.log("number2 " + a);
        console.log("number1 " + result);
    }

    // if (isNaN(value)) {
    //     a = currentNumber + value;

    //     printToscreen(a);


    // }


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
    switch (operator) {
        case "=":
            result = Number(a) + Number(result);
            console.log(result);
            printToscreen(result);
            break;
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

    }
    printToscreen(result);
}

function onDot(el) {
    let value = el.value;
    if (value == ".") {
        a = a + ".";


    }
    if (a.includes(".")) {


    }
    printToscreen(a);
}