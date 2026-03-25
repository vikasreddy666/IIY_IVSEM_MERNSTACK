const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Request received
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Response sent
    res.write("Hello from Node.js Server");

    res.end();
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});