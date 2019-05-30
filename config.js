const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'cest un secret',
    database: 'one_piece'
});
module.exports = connection;