const fs = require('fs') // importando o módulo File System e o atribuindo a variavel

// o metodo readFile é do fs e o utilizamos para ler arquivos
fs.readFile('apoio.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err)
        return
    }

    console.log(data)
});