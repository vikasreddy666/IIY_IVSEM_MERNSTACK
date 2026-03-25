const express = require('express');
const app = express();

app.use(express.json());

// GET
app.get('/data', (req, res) => {
    res.send("GET: Fetching data");
});

// POST
app.post('/data', (req, res) => {
    const newData = req.body;
    res.send("POST: Data received - " + JSON.stringify(newData));
});

// DELETE
app.delete('/data/:id', (req, res) => {
    res.send("DELETE: Deleted ID " + req.params.id);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});