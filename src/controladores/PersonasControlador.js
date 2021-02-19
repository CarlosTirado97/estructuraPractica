const {Persona} = require('../modelos')
const {PersonaService} = require('../servicios')
const personaService = new PersonaService()

class PersonasControlador {

    async getPersonas(req, res) {
        try {
            const personas = await personaService.traerPersonas()
            res.send(personas)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

}

module.exports = PersonasControlador