const display = document.getElementById('display')
const numberButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')

// original state of the calculator
let firstNumber = ''
let operator = null
let secondNumber = ''
let result = ''
let clearDisplay = false
function clear(){
    firstNumber = ''
    operator = null
    secondNumber = ''
    display.textContent = '0'
}
// function add(a, b){
//     return a + b
// }
// function subtract(a, b){
//     return a - b
// }
// function multiply(a, b){
//     return a * b
// }
// function divide(a, b){
//     return (a === 0) ? alert('error') : a / b
// }
// function operate(op, num1, num2){
//     switch (op) {
//         case '+':
//             return add(num1, num2)
//         case '-':
//             return subtract(num1, num2)
//         case '/':
//             return divide(num1, num2)
//         case '*':
//             return multiply(num1, num2)
//         default :
//             return null
// }}
function operate(op, a, b){
    if (op === '+'){return a + b}
    else if (op === '-'){return a - b}
    else if (op === '*'){return a * b}
    if (op === '/' && a !== 0){return a / b}
    else if(a === 0){alert('error')}
}
function appendNumber(numberString){
    if (clearDisplay){
        display.textContent = ''
        clearDisplay = false
    }
    if (display.textContent === '0' || display.textContent === firstNumber){
            display.textContent = numberString
        }else {display.textContent += numberString}
}
function setOperator(op){
    firstNumber = display.textContent
    operator = op
    clearDisplay = true
}
function calculate(){
    secondNumber = display.textContent
    result = operate(operator, Number(firstNumber), Number(secondNumber))
    display.textContent = result
    console.log(result)
}
numberButton.forEach(press => {
    press.addEventListener('click', () => {
        appendNumber(press.textContent)
    })
})
operatorButton.forEach(press => {
    press.addEventListener('click', () => {
        setOperator(press.dataset.operator)
    })
})
equalsButton.addEventListener('click', calculate)
clearButton.addEventListener('click', clear)
document.getElementById('delete').addEventListener('click', () =>{
    if (display.textContent.length > 1){
        display.textContent = display.textContent.slice(0, -1)
    } else {display.textContent = '0'}
})