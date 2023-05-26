/*
    O fs (File System) é um módulo core, que ajuda na interação do sistema de arquivos
    Ajuda cocm a leitura, gravação, exclusão e manipu
*/

const fs = require("fs")

console.log("Início")

// método para a criação de arquivo, seguindo a Sincrocidade do código.
fs.writeFileSync("arquivo.txt", 'oi') //dois argumentos, o nome do arquivo e o que estará dentro do arquivo

// o 'Fim'só vai ser impresso após a criação do arquivo da linha de cima
console.log('Fim')