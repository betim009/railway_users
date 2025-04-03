const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const usersRouter = require('./src/routes/users')
const path = require("path");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); 
});

app.use('/users', usersRouter);

module.exports = app;