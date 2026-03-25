const express = require('express');
const session = require('express-session');
const app = express();

// Session middleware
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Set session
app.get('/login', (req, res) => {
    req.session.user = "Ajay";
    res.send("User logged in");
});

// Get session
app.get('/profile', (req, res) => {
    if (req.session.user) {
        res.send("Welcome " + req.session.user);
    } else {
        res.send("Please login first");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});