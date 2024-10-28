// Getting the express module
const express = require('express');
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Simple data base
const db = []

// Routes
app.get('/', (req, res) => {
    console.log("Hello from home page")
    res.status(200).send('Hello World');
});

app.put('/api', (req, res) => {
    console.log("You have posted some information")
    res.sendStatus(200);
})

app.post('/api/info', (req, res) => {
    const { information } = req.body;
    console.log("Message ", information)
    db.push(information);
    console.log("DB", db);
    res.status(201).json({"yourMessage": information});
})

app.delete('/', (req, res) => {
    console.log("What do you want to delete?")
    res.sendStatus(200);
});

// Setting up the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


