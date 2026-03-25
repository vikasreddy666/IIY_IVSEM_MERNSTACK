const express = require('express');
const app = express();

// Set EJS
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('home', { name: "Ajay" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});