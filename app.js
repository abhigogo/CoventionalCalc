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

function addEventLogs(operation, numBefore, numEntered, opResult){
    const activityLog = {
        opPerformed : operation,
        iniNum : numBefore,
        userIp : numEntered,
        resultOp : opResult
    }
    logEntries.push(activityLog);
    console.log(logEntries);
}

// Addition Function
addBtn.addEventListener('click',add);
function add(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult + enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('+', initialValue, enteredNumber);
    addEventLogs("ADD",initialValue,enteredNumber,currentResult); 
}

// Subtraction
subtractBtn.addEventListener('click',subtract);
function subtract(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult - enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('-', initialValue, enteredNumber);
    addEventLogs("SUBTRACT",initialValue,enteredNumber,currentResult); 
}

// Multiplication
multiplyBtn.addEventListener('click', multiply);
function multiply(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult * enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('*', initialValue, enteredNumber);
    addEventLogs("MULTIPLY",initialValue,enteredNumber,currentResult); 
}

// Division
divideBtn.addEventListener('click', divide);
function divide(){
    initialValue = currentResult;
    enteredNumber = convertUserInput();
    currentResult = currentResult / enteredNumber;
    currentResultOutput.textContent = currentResult;
    outputCurrentCalc('/', initialValue, enteredNumber);
    addEventLogs("DIVIDE",initialValue,enteredNumber,currentResult); 
}
