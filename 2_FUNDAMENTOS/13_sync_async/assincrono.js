const fs = require('fs')

console.log('inicio')


// Método writeFile é assincrono e pode receber 3 argumentos
//Utilizo o método setTimeout, pra "segurar" a criação do arquivo, fazendo-o ser criado após 1s
fs.writeFile("arquivoAsincrono.txt", "Oi, sou assincrono", function (err) {
    setTimeout(function () {
        console.log("Arquivo Criado");
    }, 100);
})

console.log('fim!')