// importando o método readline do Module core

//config para receber e enviar dados para o usuário
const readline = require('readline').createInterface({
    input: process.stdin, //argumento 1 - Entrada
    output: process.stdout, // argumento 2 - Saída
})

readline.question("Você progrma com qual linguagem? ", (language) => {
    if (language === 'html') {
        console.log("Ta maluco? Isso nem é linguagem")
    }else{
        console.log(`A minha linguagem preferida é: ${language}`)
    }
    readline.close()
})