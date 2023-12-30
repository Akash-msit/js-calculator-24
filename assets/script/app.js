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
function writeToLog(   //reuse that function in evrey action 
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  }; //object create
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = '+';
  }else if(calculationType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  }else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  }else if(calculationType === 'DEVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD');
  
}
function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DEVIDE');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
