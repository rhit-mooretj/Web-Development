// Question 1
function multiply(x, y) {
    return x * y;
}

// Question 2
function isEven(num) {
    return num % 2 == 0;
}

// Question 3
const subtract = function (a, b) {
    return a - b;
}

// Question 4
const greeting = function (name) {
    return `Hello, ${name}!`;
}

// Question 5
function calculate(x, y) {
    const square = function (x, y) {
        return (x + y) * (x + y);
    }
    return square(x, y);
}

// Question 6
function average(num1, num2, num3) {
    const average = function (num1, num2, num3) {
        return (num1 + num2 + num3) / 3;
    }
    return average(num1, num2, num3);
}

// Question 7 Original
function multiplyDec(a, b) {
    return a * b;
}

// Question 7 Arrow
const multiplyArrow = (a, b) => a * b;

// Question 8 Original
function greetDec(name) {
    return `Hello, ${name}!`;
}

// Question 8 Arrow
const greetArrow = (name) => `Hello, ${name}!`;

// Question 9 Original
function squareDec(x) {
    return x * x;
}

// Question 9 Arrow
const squareArrow = (x) => x * x;

// Question 10 Original
function isEvenDec(num) {
    return num % 2 == 0;
}

// Question 10 Arrow
const isEvenArrow = (num) => num % 2 == 0;

// Question 11 Original
function findMaxDec(numbers) {
    return Math.max(...numbers);
}

// Question 11 Arrow
const findMaxArrow = (numbers) => Math.max(...numbers);

// Question 12 Original
function addTwoNumbersDec(a, b) {
    const sum = a + b;
    return sum;
}

// Question 12 Arrow
const addTwoNumbersArrow = (a, b) => a + b;

// Run Questions
console.log(`Question 1: 5 * 3 = ${multiply(5, 3)} \n`);
console.log(`Question 2: 7 = ${isEven(7)} \n`);
console.log(`Question 3: 5 - 3 = ${subtract(5, 3)} \n`);
console.log(`Question 4: Tyler = ${greeting("Tyler")} \n`);
console.log(`Question 5: a=3, b=4 = ${calculate(3, 4)} \n`);
console.log(`Question 6: a=3, b=4, c=5 = ${average(3, 4, 5)} \n`);
console.log(`Question 7 Declaration: 5 * 3 = ${multiplyDec(5, 3)} \n`);
console.log(`Question 7 Arrow: 5 * 3 = ${multiplyArrow(5, 3)} \n`);
console.log(`Question 8 Declaration: Tyler = ${greetDec("Tyler")} \n`);
console.log(`Question 8 Arrow: Tyler = ${greetArrow("Tyler")} \n`);
console.log(`Question 9 Declaration: 7 = ${squareDec(7)} \n`);
console.log(`Question 9 Arrow: 7 = ${squareArrow(7)} \n`);
console.log(`Question 10 Declaration: 10 = ${isEvenDec(10)} \n`);
console.log(`Question 10 Arrow: 10 = ${isEvenArrow(10)} \n`);
console.log(`Question 11 Declaration: [1, 2, 3, 4, 5] = ${findMaxDec([1, 2, 3, 4, 5])} \n`);
console.log(`Question 11 Arrow: [1, 2, 3, 4, 5] = ${findMaxArrow([1, 2, 3, 4, 5])} \n`);
console.log(`Question 12 Declaration: 5 + 3 = ${addTwoNumbersDec(5, 3)} \n`);
console.log(`Question 12 Arrow: 5 + 3 = ${addTwoNumbersArrow(5, 3)} \n`);