/*
    Com o módulo Path conseguimos extrair diversas informações sobre 
    caminhos e arquivos.
    Exemplo de informações: nome do diretório, nome do arquivo, extensão do arquivo, etc
*/

/*  Função "resolve", podemos saber qual o path completo até o arquivo alvo.
    Função "join", podemos formar um path dinâmico, com variáveis e valores fixos.
*/

// chamando o módulo core Path
const path = require('path')

// PATH ABSOLUTO

//"resolve", podemos saber qual o path completo até o arquivo alvo.
console.log(path.resolve('teste.txt'))

// FORMANDO UM PATH
const midFolder = 'relatorios'
const fileName = 'guilherme.txt'

//"join", podemos formar um path dinâmico, com variáveis e valores fixos.
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)