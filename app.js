const inputNumber = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
let currentResultOutput = document.getElementById("current-result");
let currentCalcOutput = document.getElementById("current-calculation");
let logEntries = [];

function convertUserInput(){
    return parseInt(inputNumber.value);
}

function outputCurrentCalc(operator, initialResult, enteredValue){
    currentCalcOutput.textContent = ` ${initialResult} ${operator} ${enteredValue} `;
}

defaultValue = 0;
currentResult = defaultValue;

// Addition Function
addBtn.addEventListener('click',add);
function add(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult + enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('+', initialValue, enteredNumber);
    const logEntry = {
        operation: "Add",
        previousNumber : initialValue,
        numberEntered : enteredNumber,
        sum : currentResult
    }
    logEntries.push( logEntry );  // adds the current calculation to the logEntries array 
}

// Subtraction
subtractBtn.addEventListener('click',subtract);
function subtract(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult - enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('-', initialValue, enteredNumber);
    const logEntry = {
        operation: "Subtract",
        previousNumber : initialValue,
        numberEntered : enteredNumber,
        difference : currentResult
    }
    logEntries.push( logEntry ); 
}

// Multiplication
multiplyBtn.addEventListener('click', multiply);
function multiply(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult * enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('*', initialValue, enteredNumber);
    const logEntry = {
        operation: "Multiply",
        previousNumber : initialValue,
        numberEntered : enteredNumber,
        product : currentResult
    }
    logEntries.push( logEntry ); 
}

// Division
divideBtn.addEventListener('click', divide);
function divide(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult / enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('/', initialValue, enteredNumber);
    const logEntry = {
        operation: "Divide",
        previousNumber : initialValue,
        numberEntered : enteredNumber,
        quotient : currentResult
    }
    logEntries.push( logEntry ); 
}
