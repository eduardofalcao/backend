const express = require('express')
const app = express()

//middlewares
app.use((req, res, next) => {
    console.log("passa pelo middleware... e segue")
    next()
})

//routes
const indexRouter = require("./routers/index.js")
app.use('/', indexRouter)

const calcRouter = require("./routers/calculadora.js")
app.use('/calculadora', calcRouter)



//app.get('/', (req, res ) => res.send('Hello world'))
//app.get('/nome', (req, res ) => res.send('<h1>Eduardo</h1'))
//app.get('/calculador/soma', (req, res ) => res.send('Soma:'))
//app.get('/calculador/sub', (req, res ) => res.send('Sub:'))

app.listen(3000, (req, res) => console.log('listening...'))