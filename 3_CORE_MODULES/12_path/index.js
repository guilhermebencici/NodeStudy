/*
    Com o módulo Path conseguimos extrair diversas informações sobre 
    caminhos e arquivos.
    Exemplo de informações: nome do diretório, nome do arquivo, extensão do arquivo, etc
*/

// chamando o módulo core Path
const path = require('path')

//criando um "arquivo" para extrair as informações
const customPath = "/relatorios/guilherme/relatorio1.pdf"

console.log(path.dirname(customPath)) // para extrair o nome do diretório
console.log(path.basename(customPath)) // para extrair o nome do arquivo
console.log(path.extname(customPath)) // para extrair a extensão do arquivo