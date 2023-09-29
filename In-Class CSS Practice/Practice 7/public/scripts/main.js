// Question 1
function question1() {
    console.log("Question 1:")
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
    console.log();
}

// Question 2
function question2() {
    console.log("Question 2:");
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
    console.log();
}

// Question 3
function question3() {
    console.log("Question 3:");
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    console.log(sum);
    console.log();
}

// Question 4
function question4() {
    console.log("Question 4:");
    const student = { name: 'John', age: 20, grade: 'A' };
    for (const key in student) {
        console.log(`${key}: ${student[key]}`);
    }
    console.log();
}

// Question 5
function question5() {
    console.log("Question 5:");
    const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
    for (const key in book) {
        console.log(`${key}: ${book[key]}`);
    }
    console.log();
}

// Question 6
function question6() {
    console.log("Question 6");
    const colors = ['red', 'green', 'blue', 'yellow'];
    for (const color of colors) {
        console.log(color);
    }
    console.log();
}

// Question 7
function question7() {
    console.log("Question 7:");
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    console.log(sum);
    console.log();
}

// Question 8
function question8() {
    console.log("Question 8:");
    const temperatures = [32, 68, 75, 82, 56];
    temperatures.forEach(fToC);
    console.log();
}

// Convert F to C
function fToC(temperatureF) {
    let temperatureC = (temperatureF - 32) * 5 / 9;
    console.log(`Fahrenheit: ${temperatureF} --> Celsius: ${temperatureC}`);
}

// Question 9
function question9() {
    console.log("Question 9:")
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
    cities.forEach(
        function printCityPopulation(city) {
            console.log(`City: ${city} Population: ${populations[city]}`);
        });
    console.log();
}

// Question 10
function question10() {
    console.log("Question 10:");
    let text = "";
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            text += '*';
        }
        console.log(text);
        text = "";
    }
    console.log();
}

// Question 10 Optimized
function question10Optimized() {
    console.log("Question 10 Optimized:");
    let text = "";
    for (let i = 1; i <= 4; i++) {
        text += '*';
        console.log(text);
    }
    console.log();
}

// Runs Questions
question1();
question2();
question3();
question4();
question5();
question6();
question7();
question8();
question9();
question10();
question10Optimized();