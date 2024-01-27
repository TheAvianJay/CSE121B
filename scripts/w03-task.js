/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractnumbers() {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractnumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => (
    number1 * number2
)

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers () {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const selectionStructures = () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById('member').checked) {
        subtotal *= .8;
    }
    document.getElementById('total').innerHTML = `$${subtotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', selectionStructures);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numberArray;

/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numberArray.filter((number) => number % 2 === 1);

/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numberArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numberArray.reduce((a, b) => a + b, 0);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numberArray.map((x) => x * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').innerHTML = numberArray.map((x) => x * 2).reduce((a,b) => a + b, 0);
