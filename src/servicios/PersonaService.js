const {PersonaDAO} = require('../datos')

const personaDAO = new PersonaDAO()

class PersonaService {

    async traerPersonas() {
        try {
            return personaDAO.traerPersonas()
        } catch (error) {
            throw new Error(error.message)
        }
    }

}

module.exports = PersonaService