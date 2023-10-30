const fs = require('fs');
const colors = require('colors');
 
const createFile = async( base = 5, list = false, until = 10) => {
    try {

        let resultFile = '';
        let consoleMessage = '';
    
        for (let i = 1; i <= until; i++) {
            let result = base * i;
            resultFile += `${ base } x ${ i } = ${ result }\n`;
            consoleMessage += `${ base } ${'x'.green} ${ i } ${'='.green} ${ result }\n`;
        }
        
        if(list){
            console.log('================'.green.bold);
            console.log(colors.green.bold(' Table of:', base));
            console.log(colors.green.bold('================'));
            console.log(colors.green.bold(consoleMessage))
        }
    
        fs.writeFileSync(`./files-table/table-${base}.txt`, resultFile);
        return `table-${base}.txt`;
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    createFile
}