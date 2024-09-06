const express = require('express');
const app = express();
const port = 5002;

// Middleware
app.use(express.json());

// Database setup
const db = require('./database');

// Routes
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM players', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});