const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");


app.use(bodyParser.json());

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


// Middleware to parse JSON data
app.use(express.json());

app.use(cors()); // To allow requests from frontend

// Endpoint to get data
app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM simpledb.players';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.send('Backend');
});


// API endpoint to insert data into the database
app.post('/', (req, res) => {
    const {name, age, salary, position} = req.body;

    // Perform the database insertion logic
    const sql = 'INSERT INTO players (name, age, salary, position) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, age, salary, position], (error) => {
        if (error) {
            console.error('Error inserting into database: ' + error.stack);
            res.status(500).json({error: 'Error inserting into database'});
            return;
        }
        res.json({message: 'Data inserted successfully'});
    });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Frontend running on http://localhost:8080`);
});