// mais de um valor

const x = 10
const y = 'James Bond'
const z = [1,2]

console.log(x,y,z)

// contagem de impressoões (interessante para os loops)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variavel entre string
console.log("O nome é %s, ele é um espião", y) // %s -> dentro de string, carrega a variavel de y (que definidade anteriormente como um texto)

// Limpando o Console 
//setTimeout executa uma função ou trecho de código específicado no término do tempo informado
setTimeout(() => {
    console.clear() // função clear, limpa o console
},2000)