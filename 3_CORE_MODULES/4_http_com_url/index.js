/* Podemos utilizar a união de dois módulo core e assim ter um resultado melhor.
Ao utilizarmos o http criamos nosso server e alteramos a sua resposta baseado na URL acessada.
Já com a url, processamos os parâmetros que veem pela query string, para alterar a lógica do http 
*/

//chamando os dois métodos
const http = require('http')

const porta = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true) // quando o usuario acessar, chamo o modulo url e vamos parssear a url que vem pela req.
    const name = urlInfo.query.name //urlinf (url decomposta), puxo name que vem dentro da query

    res.statusCode = 200
    res.setHeader('Contenty-type', 'text/html')
    if (!name) {
        res.end('<h1> Preencha seu nome! </h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>')
    } else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})