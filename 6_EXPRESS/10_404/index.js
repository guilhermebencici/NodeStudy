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

// QARQUIVOS ESTÁTICOS
app.use(express.static('public')) //-> nome da pasta

// UTILIZANDO PARA CHAMAR A PASTA
const basePath = path.join(__dirname, 'templates')

app.use('/users', users)

// CRIANDO ROTA
app.get('/', (req, res) =>{

    res.sendFile(`${basePath}/index.html`)

})

// VAI SER ACIONADO CASO O USUÁRIO NÃO ENCONTRE ALGUMA ROTA
app.use(function(req, res, next){

    res.status(404).sendFile(`${basePath}/404.html`)
})

// A função app.listen() do Express inicia um socket UNIX e escuta as conexões em um caminho fornecido.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
