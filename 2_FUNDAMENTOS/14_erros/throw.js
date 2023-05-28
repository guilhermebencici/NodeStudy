// O throw encerra o programa!

const x = 10 //"10"

if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número inteiro')
}

console.log('continuando o código....')