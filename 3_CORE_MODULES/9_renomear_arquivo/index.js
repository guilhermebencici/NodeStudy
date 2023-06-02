/* 
	
    O método RENAME é utilizado para renomear o arquivo
    É importante passar o arquivo como parâmetro e também o novo nome
    Também é possível checar se houve algum erro a partir
    da callback retornada

 */

//chamando o método fs
const fs = require('fs')

//deixando mais dinâmico
const arqAntigo = "arquivo.txt"
const arqNovo = "novoarquivo.txt"

//Módulo FS chamando método rename, que recebe como argumento(nomeAtual, nomeNovo, Function para Callback)
fs.rename(arqAntigo, arqNovo, function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
    }
})

// OBS: para testar, insira o "arquivo.txt"