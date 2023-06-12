/*
    Ao utilizar o método stat, do fs, podemos ter mais detalhes sobre arquivos.
    ex: tamanho, data de criação, se é arquivo ou diretório e etc

*/

// chamando o módulo core!

const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
    if (err) {
        console.log(`O arquivo não existe`)
        return
    }

    //pegando os dados do arquivo

    console.log(stats.isFile()) //é um arquivo? Boolean
    console.log(stats.isDirectory()) // é um diretório? Boolean
    console.log(stats.isSymbolicLink()) // é um link simbólico para o arquivo? Boolean
    console.log(stats.ctime) // verificamos a data de criação do arquivo
    console.log(stats.size) // verificando o tamanho do arquivo

})