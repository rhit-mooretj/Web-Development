const validator = require('validator');
console.log(validator.isEmail('olga@example.com'));
console.log(validator.isEmail('example.com'));
console.log(validator.isURL("example.com"));

const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and ', failure);