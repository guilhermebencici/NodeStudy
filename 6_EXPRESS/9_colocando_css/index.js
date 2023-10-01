/*
			COLOCANDO CSS
			
Para inserir CSS é preciso utulizar middleware, usamos o: express.static
Para funcionar, colocamosum diretório base, deixando-o public
 
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

// QARQUIVOS ESTÁTICOS
app.use(express.static('public')) //-> nome da pasta

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
