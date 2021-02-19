const mysql = require('mysql2')

let pool = null

if (!pool) {
    pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'personas',
        port: 3306,
        password:process.env.DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
}
  
module.exports = pool