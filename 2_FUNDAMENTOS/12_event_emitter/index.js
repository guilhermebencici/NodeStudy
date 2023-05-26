/*
    Se comporta como os eventos do navegador!
    Podemos ativar um código em alguns pontos da aplicação, como o início.
    É um Core Module (com o nome events), e para utiliza-lo, precisamos instanciar a classe
    EventEmitter
*/

// chamando o módulo
const EventEmitter = require('events')

// instanciando o módulo (classe) na aplicação
const eventEmitter = new EventEmitter()


//Definindo um evento
eventEmitter.on('start', () => {
    console.log("Durante")
})

console.log("Antes")

// Ativando o evento
eventEmitter.emit('start')

console.log('Depois')