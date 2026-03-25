const express = require('express');
const app = express();

// Basic Route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Route Parameter
app.get('/user/:name', (req, res) => {
    res.send("User Name: " + req.params.name);
});

// Query Parameter
app.get('/search', (req, res) => {
    let keyword = req.query.q;
    res.send("Search Query: " + keyword);
});

// URL building example
app.get('/product/:id', (req, res) => {
    res.send("Product ID: " + req.params.id);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});