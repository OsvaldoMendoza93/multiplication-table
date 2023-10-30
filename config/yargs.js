/* Obtner los parametors que se escriben el consola poe default de Node NOTA:solo documentacion 

1. riquire para usar el modulo process de node 
    const { argv } = require('process');
2. destructuracion de arreglo y tomando la posicion 2 
    const [, , arg3 = 'base=5'] = process.argv;
3. de la posicion dos se parte el string en dos partes aprtir de simbolo "=" y se hace desestructuracion de arreglo
    const [, base = 5] = arg3.split('='); ---> ese sera el valor de base y por default sera 5 
------------------------------------------------------------------------------------------------*/

/* parametros de la aplicacion usando yargs */
const argv = require('yargs')
.option(
    'b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication table'
    })
.option(
    'l',{
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Show the multiplication table in console'
})
.option(
    'u',{
        alias: 'until',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Limit of the multiplication'
})
.check((argv, options) => {
    if(isNaN(argv.base)){
        throw 'The base must be a number'
    }
    return true
})
.argv;

module.exports = argv