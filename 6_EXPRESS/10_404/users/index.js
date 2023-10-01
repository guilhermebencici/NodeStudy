// CHAMANDO O EXPRESS
const express = require('express')
const router = express.Router()

// CHAMANDO O PATH
const path = require("path")


// UTILIZANDO PARA CHAMAR A PASTA
const basePath = path.join(__dirname, '../templates')
router.get('/add', (req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

// MÉTODO POST
router.post('/save', (req, res) =>{
    console.log(req.body)
    // pegando atributos individualmente
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name}, e ele tem ${age} anos!`)

    res.sendFile(`${basePath}/userform.html`)
})

// CRIANDO ROTA COM PARAMETROS (DINAMICOS)
router.get('/:id', (req, res) =>{

    const id = req.params.id
    // leitura da tabela users, resgatando usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router