const express = require('express');
const cors = require('cors');
const connection = require('./connection');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Node.js rodando no Railway!');
});

app.get('/users', async (req, res) => {
    const [result] = await connection.execute(
        'SELECT * FROM users'
    );
    res.json(result);
});

module.exports = app;