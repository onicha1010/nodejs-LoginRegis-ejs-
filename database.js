const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', 
    user     : 'root', 
    password : 'root',
    database : 'nodejs_crud_db' 
}).promise();
module.exports = dbConnection;