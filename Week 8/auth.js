const express = require('express');
const app = express();

app.use(express.json());

// Dummy user
const user = {
    username: "admin",
    password: "1234"
};

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        res.send("Login Successful");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});