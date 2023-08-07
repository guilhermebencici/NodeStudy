//Pacote global,não fica salvo na pasta node_module e sim no computador do usuário.

//comando: flag -g

//Ao utilizarmos a flag: --save-dev estamos separando ele no package.json dos demais

const _ = require('lodash')


const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a, b)

console.log(diff)