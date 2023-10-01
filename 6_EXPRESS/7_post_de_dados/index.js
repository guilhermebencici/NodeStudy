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

// LENDO O BODY
app.use(express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

// UTILIZANDO PARA CHAMAR A PASTA
const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

// MÉTODO POST
app.post('/users/save', (req, res) =>{
    console.log(req.body)
    // pegando atributos individualmente
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name}, e ele tem ${age} anos!`)

    res.sendFile(`${basePath}/userform.html`)
})

// CRIANDO ROTA COM PARAMETROS (DINAMICOS)
app.get('/users/:id', (req, res) =>{

    const id = req.params.id

    // leitura da tabela users, resgatando usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)

})

// CRIANDO ROTA
app.get('/', (req, res) =>{

    res.sendFile(`${basePath}/index.html`)

})

// A função app.listen() do Express inicia um socket UNIX e escuta as conexões em um caminho fornecido.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
