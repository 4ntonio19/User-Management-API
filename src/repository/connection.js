const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'admin123',
    database: 'apiLogin'
})

module.exports = connection;