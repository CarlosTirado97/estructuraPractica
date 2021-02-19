require('../config')
const server = require('./app')

server.listen(process.env.PORT, (err) => {
    if (err) return console.log(err)
    
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})

server.on("UnhandledPromiseRejection", (err) => {
    console.log(err)
})