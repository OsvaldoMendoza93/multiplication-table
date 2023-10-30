
const { createFile } = require('./helpers/multiplication');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

createFile(argv.base, argv.l, argv.u)
    .then(fileName => console.log(colors.green.bold(fileName, 'create')))
    .catch(error => console.log(colors.red.bold(error)))