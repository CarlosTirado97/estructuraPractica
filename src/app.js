const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const {PersonaRutas} = require('./rutas')

//body-parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//cors
app.use(cors({
    origin:'*'
}))

//rutas
app.use('/personas',PersonaRutas)
app.use((err, req, res, next) => {
    const { message, status } = err
    
    res.status(status || 500).json({
        err: {
            message:message || 'Internal server error'
        }
    })
})

module.exports = app
