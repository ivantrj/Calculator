let display = document.getElementsByName("display");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    if(operation == add) {
        return add(a, b);
    } else if(operation == subtract) {
        return subtract(a, b);
    } else if(operation == multiply) {
        return multiply(a, b);
    } else if(operation == divide) {
        return divide(a, b);
    }
}

// listen for clicks on numbers
let numbers = document.getElementsByClassName("numbers");
for(var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(e) {
        console.log('number clicked');
    });
}

let operators = document.getElementsByClassName("ops");
for(var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(e) {
        console.log("operator clicked");
    });
}


