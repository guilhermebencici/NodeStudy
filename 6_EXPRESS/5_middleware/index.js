/*
			MIDDLEWARES
			
Middlewares são códigos que pode ser executados no "meio/entre" alguma ação e outra
	Exemplo: Verificar se o usuário está logado.
	
O método que nos dá acesso a utilizar middlewares é o "use" no Express

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

// ESTABELECENDO O MIDLLEWARE
const checkAuth = function(req, res, next) {

    req.authStatus = true
    if(req.authStatus) {
        console.log('Está logado, pode continuar!')
        next() // se não utilizar o next, vai travar.
    } else {
        console.log('Não está logado, faça o login para continuar!')
        next() // se não utilizar o next, vai travar.
    }
}

// USANDO O MIDDLEWARE
app.use(checkAuth)


// CRIANDO ROTA
app.get('/', (req, res) =>{

    res.sendFile(`${basePath}/index.html`)

})

// A função app.listen() do Express inicia um socket UNIX e escuta as conexões em um caminho fornecido.
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})