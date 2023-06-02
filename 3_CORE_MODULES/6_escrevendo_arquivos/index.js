/* O Método WriteFile podemos criar e escrever arquivos
    exemplo um envio de informações de um usuário */


//chamando os métodos
const http = require('http')
const fs = require('fs')

const porta = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true) // chamando o método url
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile("arquivo.txt", name, function(err, data){
            res.writeHead(302, {
                Location: '/', // enviando pra home
            })
            return res.end() // finalizando
        })
    }


})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})