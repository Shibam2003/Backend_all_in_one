const chalk = require('chalk');
const validator = require('validator');
// console.log(chalk.red.inverse('false'));
const res = validator.isEmail('thapa@thapa.com');
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));
console.log('hello');