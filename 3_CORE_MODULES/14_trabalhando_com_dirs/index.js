/*
Trabalhando com diretórios

exists pode evidenciar se um diretório existe ou não
mkdir pode criar um diretório

*/

const fs = require("fs")

// negando o fs
if (!fs.existsSync('./minha pasta')) {
    console.log('Não existe!!')

    fs.mkdirSync("minhapasta")
} else if (fs.existsSync('./minhapasta')) {
    console.log('Existe!!')
}

