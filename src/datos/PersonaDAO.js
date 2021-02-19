const pool = require('../conexion')

class PersonaDAO {
    
    async traerPersonas() {
        try {
            const promisePool = await pool.promise()
            const [rows] = await promisePool.query(`CALL get_personas`)

            return rows[0]

        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

}

module.exports = PersonaDAO