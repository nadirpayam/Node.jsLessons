const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'node-app',
    password: 'mysqlaaa'
});

module.exports = connection.promise(); // sorgular asenkron şekilde olucak
















/*
database bağlantısı için mysql kurduk > npm install --save mysql2


*/