require('dotenv').config();  // Ensure environment variables are loaded

const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'db',  // Docker service name or fallback
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'database'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = connection;