const pool = require('../conexion')

class BaseDAO {

    constructor(tabla) {
        this.tabla = tabla
    }

   async traer() {
        try {
            const promisePool = await pool.promise()
            const [rows] = await promisePool.query(`CALL get_${this.tabla}s`)

            return rows[0]

        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }

}

module.exports = BaseDAO