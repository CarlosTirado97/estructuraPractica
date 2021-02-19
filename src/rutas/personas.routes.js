const router = require('express').Router()
const {PersonasControlador} = require('../controladores')

const personasControlador = new PersonasControlador()

router.get('/', personasControlador.getPersonas)

module.exports = router