const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('index', { name: "Ajay" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});