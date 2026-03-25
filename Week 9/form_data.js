const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Form page
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            Name: <input type="text" name="name"><br><br>
            Age: <input type="number" name="age"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form
app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.send("Received: " + name + " (" + age + ")");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});