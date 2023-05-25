
//este é um array, onde eu passei o argumento nome=Gui

console.log(process.argv) 

// o argumento está no indice 2, com o SLICE eu aponto qual eu quero obter do array
const args = process.argv.slice(2) 
console.log(args)


// split, vai dividir a string no elemento que for passado
const nome = args[0].split("=")[1] 
console.log(nome)

// setei (node index.js nome=Gui idade=30) o elemento idade como mais argumento, agora no array temos dois elementos
const idade = args[1].split("=")[1]
console.log(idade)

console.log(`Meu nome é ${nome} e possuo ${idade} anos`)