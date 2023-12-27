/*
==== LAYOUTS ====

- Reaproveitamento de código entre páginas
- A pasta LAYOUTS fica dentro de views


*/


const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')


// renderizando a view
app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('App funcionando!')
})