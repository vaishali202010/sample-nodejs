const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, VAISHALI from Node.js! And add something new to check Jenkins part2</h1>\n');
});

// The server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Optionally stop the server after a specific time (e.g., 10 seconds)
setTimeout(() => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0); // Exit gracefully
    });
}, 100000); // 10000 ms = 10 seconds
