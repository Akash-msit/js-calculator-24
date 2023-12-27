const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
//gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription); // from calculation.js
}

//add two number --> single line comment
/*
    .... Multiline comment.
*/
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }; //object create
  logEntries.push(logEntry);
  console.log(logEntries);
}
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *=  enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function divide() {
    const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult  /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);    
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

