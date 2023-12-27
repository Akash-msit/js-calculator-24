const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("plus");
const subtractBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById("times");
const divideBtn = document.getElementById("divide");

const currentResultOutput = document.getElementById("current-result")
const currentCalculationOutput = document.getElementById("current-calculation")

function outputResult(result, text){
    console.log(result)
    currentResultOutput.textContent= result;
    currentCalculationOutput.textContent = text;
}
