/*
			ENVIANDO DADOS POR POST
			
Para enviarmos os dados, criaremos um form, mandando os dados via POST para alguma URL.
Como estamos utilizando o Express, precisamos colocar alguns middlewares como o
"express.json", para conseguirmos ler os dados do BODY.

Criaremos também, a rota que irá receber estes dados, utilizando o método POST

*/


//CHAMANDO O FRAMEWORK
const express = require("express")

// EXECUTANDO O EXPRESS
const app = express()

// VARIÁVEL DE AMBIENTE
const port = 3000

// CHAMANDO O PATH
const path = require("path")

const users = require('./users')

// LENDO O BODY
app.use(express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

// UTILIZANDO PARA CHAMAR A PASTA
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

// CRIANDO ROTA
app.get('/', (req, res) =>{

    res.sendFile(`${basePath}/index.html`)

})

// A função app.listen() do Express inicia um socket UNIX e escuta as conexões em um caminho fornecido.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
