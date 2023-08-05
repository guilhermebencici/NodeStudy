//com esse módulo, podemos extrair informações do sistema operacional

// chamando o módulo OS
const os = require('os')

// quantos cpus tem no servidor
console.log(os.cpus())

// quanto de memória livre tem
console.log(os.freemem())

// qual o diretório da home
console.log(os.homedir())

// qual o tipo, sistema operacional está rodando
console.log(os.type())

