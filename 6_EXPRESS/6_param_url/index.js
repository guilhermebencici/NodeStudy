/*
			PARÂMETROS POR URL
			
Podemos resgatar parâmetros através do req (a requisição)
	acessando -> req.params.<nomeParametro>

*/

//CHAMANDO O FRAMEWORK
const express = require("express")

// EXECUTANDO O EXPRESS
const app = express()

// VARIÁVEL DE AMBIENTE
const port = 3000

// CHAMANDO O PATH
const path = require("path")

// UTILIZANDO PARA CHAMAR A PASTA
const basePath = path.join(__dirname, 'templates')

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