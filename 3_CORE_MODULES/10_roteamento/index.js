/* O Método WriteFile podemos criar e escrever arquivos
    exemplo um envio de informações de um usuário */


//chamando os métodos
const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true) // chamando o método url

    //a variavel filename, recebe o nome que o usario acessou e ao utilizarmos o substring(1), estamos dizendo pra puxar a partir do segundo caractere em diante
    const filename = q.pathname.substring(1)

    //só entra na condição se o arquivo for html, pois só sera renderizado html
    if (filename.includes('html')) {
        //verificando se o documento existe
        if (fs.existsSync(filename)) {
            fs.readFile(filename, function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })

        } else {
            fs.readFile('404.html', function (err, data) {
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})