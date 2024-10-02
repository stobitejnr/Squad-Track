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
    host: "squad-track-database.cmwrzzcezjll.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "adminadmin",
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


// Handle DELETE request
app.delete('/firster', (req, res) => {
    const {name, position} = req.body;

    console.log(req.body);

    // SQL query to delete the record matching the exact details
    const query = `
        DELETE
        FROM first_players
        WHERE name = ?
          AND position = ?;
    `;

    // Execute the query
    db.query(query, [name, position], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting the record');
        }

        if (result.affectedRows > 0) {
            res.send('Record deleted successfully');
        } else {
            res.status(404).send('No matching record found');
        }
    });
});

// Handle DELETE request
app.delete('/seconder', (req, res) => {
    const {name, position} = req.body;

    console.log(req.body);

    // SQL query to delete the record matching the exact details
    const query = `
        DELETE
        FROM second_players
        WHERE name = ?
          AND position = ?;
    `;

    // Execute the query
    db.query(query, [name, position], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting the record');
        }

        if (result.affectedRows > 0) {
            res.send('Record deleted successfully');
        } else {
            res.status(404).send('No matching record found');
        }
    });
});

// Handle DELETE request
app.delete('/reserver', (req, res) => {
    const {name, position} = req.body;

    console.log(req.body);

    // SQL query to delete the record matching the exact details
    const query = `
        DELETE
        FROM reserves
        WHERE name = ?
          AND position = ?;
    `;

    // Execute the query
    db.query(query, [name, position], (err, result) => {
        if (err) {
            return res.status(500).send('Error deleting the record');
        }

        if (result.affectedRows > 0) {
            res.send('Record deleted successfully');
        } else {
            res.status(404).send('No matching record found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Frontend running on http://localhost:8080`);
});