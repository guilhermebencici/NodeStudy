//modulo externo
const minimist = require('minimist') // Pacote minimist ajuda a extrair os argumentos mais facilmente

//modulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

// utilizando o parseInt para converter para INTEIROS
const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)

