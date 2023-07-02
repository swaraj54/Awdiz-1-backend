const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome users...")
})

app.get('/ajit', (req, res) => {
    res.send("I'm Ajit...")
})

app.get("/rehmat", (req, res) => {
    res.send("I'm Rehmat..")
})

app.listen(8000, () => {
    console.log("Running on port 8000");
})