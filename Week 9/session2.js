const express = require('express');
const session = require('express-session');
const app = express();

// Session setup
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

// Login route
app.get('/login', (req, res) => {
    req.session.username = "Ajay";
    res.send("Logged In");
});

// Dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.username) {
        res.send("Welcome " + req.session.username);
    } else {
        res.send("Please login first");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});