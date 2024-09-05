const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db',  // Docker service name
    user: 'my_user',
    password: 'my_password',
    database: 'my_database'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to database!');
});

module.exports = connection;