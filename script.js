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

//event listeners on numbers

let numberButtons = document.getElementsByClassName("numberButton");

for (let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener(
        "click", 
        function(){
        setNumbers(numberButtons[i].id);
        }
    );
}

//event listeners on operators

let operators = document.getElementsByClassName("operator");

for(let i = 0; i < operators.length; i++) {
    operators[i].addEventListener(
        "click",
        function() {
            
        }
    )
}

