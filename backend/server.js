const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
    host: "database",
    user: "user",
    password: "userpassword",
    database: "simpledb"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(cors()); // To allow requests from frontend

// Endpoint to get data
app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM simpledb.players'; // Replace 'players' with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});