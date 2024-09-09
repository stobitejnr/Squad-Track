const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const port = 3000;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


app.use(express.json());


app.use(cors());


app.use(express.urlencoded({extended: true}));

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


// Endpoint to get data
app.get('/first', (req, res) => {
    const sql = 'SELECT * FROM simpledb.first_players';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
});


app.get('/second', (req, res) => {
    const sql = 'SELECT * FROM simpledb.second_players';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
});


app.get('/reserves', (req, res) => {
    const sql = 'SELECT * FROM simpledb.reserves';
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
/*
const corsOptions = {
    origin: '*', // Allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization', 'Authenticate_token'], // Allowed headers
    exposedHeaders: ['Content-Type', 'Authorization', 'Authenticate_token'] // Exposed headers
};

// Use CORS middleware
app.use(cors(corsOptions));
*/
// API endpoint to insert data into the database
app.post('/first', (req, res) => {
    const {name, age, salary, position} = req.body;
    console.log(req.body);
    console.log(name);
    console.log(req.headers);

    // Perform the database insertion logic
    const sql = 'INSERT INTO first_players (name, age, salary, position) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, age, salary, position], (error) => {
        if (error) {
            console.error('Error inserting into database: ' + error.stack);
            res.status(500).json({error: 'Error inserting into database'});
            return;
        }
        res.json({message: 'Data inserted successfully'});
    });
});


app.post('/second', (req, res) => {
    const {name, age, salary, position} = req.body;

    // Perform the database insertion logic
    const sql = 'INSERT INTO second_players (name, age, salary, position) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, age, salary, position], (error) => {
        if (error) {
            console.error('Error inserting into database: ' + error.stack);
            res.status(500).json({error: 'Error inserting into database'});
            return;
        }
        res.json({message: 'Data inserted successfully'});
    });
});


app.post('/reserves', (req, res) => {
    const {name, age, salary, position} = req.body;

    // Perform the database insertion logic
    const sql = 'INSERT INTO reserves (name, age, salary, position) VALUES (?, ?, ?, ?)';
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