const mysql = require('mysql2');

const Cinema = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Cinema',
});

module.exports = Cinema;