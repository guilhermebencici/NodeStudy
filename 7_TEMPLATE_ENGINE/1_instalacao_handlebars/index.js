/*
			TEMPLATE ENGINE
			
Uma forma de deixar o HTML dinâmico, inserindo variáveis do back no front.
Pode-se criar LYOUTS (para serem reaproveitados)
Importante para projetos que usam banco de dados (não estáticos)

Ex: EJS, PUG, HANDLEBARS.
 
 
 ==== CONHECENDO HANDLEBARS ====
 
- Template egines mais utilizado
- Dados dinâmicos no HTML ficam entre {{}}
- Pode-se criar condicionais e também loops
- Nome do pacote é: express-handlebars

*/

const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')


// renderizando a view
app.get('/',(req,res)=>{
    res.render('home',{layout: false})
})

app.listen(3000,()=>{
    console.log('App funcionando!')
})