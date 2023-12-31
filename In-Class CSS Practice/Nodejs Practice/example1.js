
// const fs = require('fs');

// const content = 'Hello, Node.js!';

// fs.writeFile('input.txt', content, 'utf-8', (err) => {
//     if (err) {
//         console.log('Error writing to the file:', err);
//         return;
//     }
//     console.log('File is saved');
// });
// console.log('File written successfully');

// const fs = require("fs");
// const data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");

const fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");